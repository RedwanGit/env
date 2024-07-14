const tabs = document.querySelectorAll('.tab');
const cards = document.querySelectorAll('.card');

function setActiveTab(tab) {
    const tabIndex = tab.dataset.tab;

    // Show active card
    cards.forEach(card => {
        card.classList.remove('active');
        if (card.id === `content-${tabIndex}`) {
            setTimeout(() => card.classList.add('active'), 50);
        }
    });

    // Update active tab style
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Load content for Reports and Presentations
    if (tabIndex === '2') {
        loadReports();
    } else if (tabIndex === '3') {
        loadPresentations();
    }
}

tabs.forEach(tab => {
    tab.addEventListener('click', () => setActiveTab(tab));
});

function loadReports() {
    const reportList = document.getElementById('report-list');
    const reports = [
        { name: 'Nestlés Environmental Management System Report', icon: '☕', file: 'reports/nestle.html' },
        //{ name: '(Does Not Exist)Annual Summary 2023.docx', icon: '📄', file: 'reports/annual_summary.html' },
        //{ name: '(Does Not Exist)Project X Progress.xlsx', icon: '📈', file: 'reports/project_progress.html' },
        //{ name: '(Does Not Exist)Customer Feedback Analysis.pdf', icon: '📊', file: 'reports/customer_feedback.html' }
    ];
    populateList(reportList, reports);
}

function loadPresentations() {
    const presentationList = document.getElementById('presentation-list');
    const presentations = [
        //{ name: '(Does Not Exist)Company Overview.pptx', icon: '☕', file: 'presentations/company_overview.html' },
        //{ name: '(Does Not Exist)New Product Launch.key', icon: '🎭', file: 'presentations/new_product_launch.html' },
        //{ name: '(Does Not Exist)Team Building Workshop.ppt', icon: '🖼️', file: 'presentations/team_building_workshop.html' },
        //{ name: '(Does Not Exist)Investor Pitch Deck.pdf', icon: '📊', file: 'presentations/investor_pitch_deck.html' }
    ];
    populateList(presentationList, presentations);
}

function populateList(listElement, items) {
    listElement.innerHTML = '';
    items.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `<span class="file-icon">${item.icon}</span>${item.name}`;
        li.addEventListener('click', () => openFile(item.file));
        listElement.appendChild(li);
    });
}

function openFile(file) {
    window.open(file, '_blank');
}

// Initialize the home tab
setActiveTab(tabs[0]);
