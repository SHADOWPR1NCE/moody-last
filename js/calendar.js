let currentDate = new Date();

// Define the specific emojis we want to use
const emojis = ['😀', '😢', '😡', '😰', '🤩', '😤'];

function updateCalendar() {
    // Month names in Hebrew
    const monthNames = [
        "ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני",
        "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"
    ];
    
    // Update month display
    document.getElementById('current-month').textContent = 
        `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
    
    // Get calendar grid
    const calendarGrid = document.getElementById('div3');
    calendarGrid.innerHTML = '';
    
    // Get first day of month and last day of month
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
    
    // Add days of month only
    for (let day = 1; day <= lastDay.getDate(); day++) {
        const dayElement = document.createElement('div');
        dayElement.className = 'grid_item';
        const randomEmoji = emojis[Math.floor(Math.random() * emojis.length)];
        dayElement.innerHTML = `
            <h1>
                <span class="emoji">${randomEmoji}</span>
                <span class="day-number">${day}</span>
            </h1>`;
        
        calendarGrid.appendChild(dayElement);
    }
}

function nextMonth() {
    currentDate.setMonth(currentDate.getMonth() + 1);
    updateCalendar();
}

function previousMonth() {
    currentDate.setMonth(currentDate.getMonth() - 1);
    updateCalendar();
}

// Initialize calendar when page loads
document.addEventListener('DOMContentLoaded', updateCalendar);