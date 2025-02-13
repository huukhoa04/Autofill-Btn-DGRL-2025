// Constants
const BUTTON_ID = "ResolvedAutoButton";
const MIN_COUNT = 10;
const MAX_COUNT = 160;
const STEP = 10;

// Generate array of counts (10, 20, 30, ..., 150)
const counts = Array.from(
    { length: (MAX_COUNT - MIN_COUNT) / STEP + 1 },
    (_, i) => MIN_COUNT + i * STEP
);

// Selector functions
const getTableCellSelector = (count) => {
    const paddedCount = count < 100 ? `0${count}` : count;
    return `tr#chcn21CH${paddedCount} td:nth-child(4)`;
};

const getInputSelector = (count) => {
    const paddedCount = count < 100 ? `0${count}` : count;
    return `#DGRLtxt21CH${paddedCount}`;
};

// Main functionality
const fillInputValues = () => {
    console.log('filling...');
    
    counts.forEach((count, index) => {
        const cell = document.querySelector(getTableCellSelector(count));
        const input = document.querySelector(getInputSelector(count));

        if (cell && input) {
            input.value = cell.innerText || 0;
        }

        // Focus and blur the last input to trigger any necessary events
        if (index === counts.length - 1) {
            console.log('done');
            input.focus();
            input.blur();
        }
    });
};

// Event listener
document.getElementById(BUTTON_ID).addEventListener("click", fillInputValues);

