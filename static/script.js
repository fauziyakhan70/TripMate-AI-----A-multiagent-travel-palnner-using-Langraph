
let currentThreadId = localStorage.getItem("travel_thread_id") || null;
let latestAnswerMarkdown = "";

console.log("TripMate script.js loaded successfully!");

function setPrompt(text) {
    document.getElementById("userInput").value = text;
}

function setLoading(isLoading) {
    const sendBtn = document.getElementById("sendBtn");
    const btnText = document.getElementById("btnText");
    const btnLoader = document.getElementById("btnLoader");

    sendBtn.disabled = isLoading;
    btnText.classList.toggle("hidden", isLoading);
    btnLoader.classList.toggle("hidden", !isLoading);
}

function showError(message) {
    const errorBox = document.getElementById("errorBox");
    errorBox.textContent = message;
    errorBox.classList.remove("hidden");
}

function hideError() {
    const errorBox = document.getElementById("errorBox");
    errorBox.classList.add("hidden");
    errorBox.textContent = "";
}

function showResult(answer, threadId) {
    latestAnswerMarkdown = answer;

    const resultBox = document.getElementById("resultBox");

    if (typeof marked !== "undefined") {
        resultBox.innerHTML = marked.parse(answer);
    } else {
        resultBox.textContent = answer;
    }

    document.getElementById("threadInfo").textContent =
        `Thread ID: ${threadId}`;

    document.getElementById("resultSection").classList.remove("hidden");

    document.getElementById("resultSection").scrollIntoView({
        behavior: "smooth"
    });
}

async function sendMessage() {
    console.log("Generate Plan button clicked!");

    hideError();

    const message = document.getElementById("userInput").value.trim();

    if (!message) {
        showError("Please enter your travel request first.");
        return;
    }

    setLoading(true);

    try {
        console.log("Sending request to FastAPI...");

        const response = await fetch("/api/travel", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: message,
                thread_id: currentThreadId
            })
        });

        const data = await response.json();

        console.log("API response:", data);

        if (!response.ok || !data.success) {
            throw new Error(data.error || "Travel planning failed.");
        }

        currentThreadId = data.thread_id;

        localStorage.setItem("travel_thread_id", currentThreadId);

        showResult(data.answer, data.thread_id);

    } catch (error) {
        console.error("Travel API error:", error);
        showError(error.message || "Something went wrong.");
    } finally {
        setLoading(false);
    }
}

function copyResult() {
    const text = document.getElementById("resultBox").innerText;

    if (!text) return;

    navigator.clipboard.writeText(text)
        .then(() => alert("Copied successfully!"))
        .catch(error => showError("Copy failed: " + error.message));
}

function downloadPDF() {
    const pdfContent = document.getElementById("pdfContent");

    if (!latestAnswerMarkdown) {
        showError("No travel plan available.");
        return;
    }

    if (typeof html2pdf === "undefined") {
        showError("PDF library failed to load.");
        return;
    }

    html2pdf().set({
        margin: 0.5,
        filename: "ai-travel-plan.pdf",
        image: { type: "jpeg", quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: {
            unit: "in",
            format: "a4",
            orientation: "portrait"
        }
    }).from(pdfContent).save();
}

// Explicitly expose functions to HTML onclick handlers
window.sendMessage = sendMessage;
window.setPrompt = setPrompt;
window.copyResult = copyResult;
window.downloadPDF = downloadPDF;

console.log("TripMate functions registered:", {
    sendMessage: typeof window.sendMessage,
    setPrompt: typeof window.setPrompt,
    copyResult: typeof window.copyResult,
    downloadPDF: typeof window.downloadPDF
});
