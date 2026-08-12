document.addEventListener('DOMContentLoaded', () => {
    const incrementButton = document.getElementById('increment');
    const decrementButton = document.getElementById('decrement');
    const resultDiv = document.getElementById('count');
    let count = 0;

    incrementButton.addEventListener('click', () => {
        count++;
        resultDiv.textContent = `you clicked ${count} times`;
    });

    decrementButton.addEventListener('click', () => {
        count--;
        resultDiv.textContent = `you clicked ${count} times`;
    });
});