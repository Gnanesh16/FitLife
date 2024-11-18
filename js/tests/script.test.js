// Simple Test Suite
document.addEventListener("DOMContentLoaded", () => {
    const output = document.getElementById("test-output");
    const tests = [
        { description: "Check if DOM is loaded", test: () => document !== null },
        { description: "Check if main header exists", test: () => document.querySelector("header") !== null },
    ];

    let results = "";
    tests.forEach((test, index) => {
        const result = test.test();
        results += `<p>Test ${index + 1}: ${test.description} - ${result ? "PASS" : "FAIL"}</p>`;
    });

    output.innerHTML = results;
});
