const API_BASE_URL = 'http://localhost:3000';

const candidateForm = document.getElementById('candidateForm');
const addResult = document.getElementById('addResult');
const candidatesList = document.getElementById('candidatesList');
const loadingMessage = document.getElementById('loadingMessage');

document.addEventListener('DOMContentLoaded', function() {
    getCandidates('ALL');
    candidateForm.addEventListener('submit', handleAddCandidate);
});

async function handleAddCandidate(event) {
    event.preventDefault();
    const formData = new FormData(candidateForm);
    const candidateData = {
        name: formData.get('name').trim(),
        m1: parseInt(formData.get('m1')),
        m2: parseInt(formData.get('m2')),
        m3: parseInt(formData.get('m3'))
    };

    if (!validateCandidateData(candidateData)) {
        return;
    }
    
    try {
        const submitButton = candidateForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Adding...';
        submitButton.disabled = true;
        const response = await fetch(`${API_BASE_URL}/candidate/add`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(candidateData)
        });
        
        const result = await response.text();
        
        if (response.ok) {
            showMessage(addResult, `Candidate added successfully! ID: ${result}`, 'success');
            candidateForm.reset();
            getCandidates('ALL');
        } else {
            showMessage(addResult, result, 'error');
        }
        
    } catch (error) {
        console.error('Error adding candidate:', error);
        showMessage(addResult, 'Failed to connect to server. Please check if the backend is running.', 'error');
    } finally {
        const submitButton = candidateForm.querySelector('button[type="submit"]');
        submitButton.textContent = 'Add Candidate';
        submitButton.disabled = false;
    }
}

function validateCandidateData(data) {
    if (!data.name || data.name.length < 2) {
        showMessage(addResult, 'Name must be at least 2 characters long.', 'error');
        return false;
    }
    
    if (isNaN(data.m1) || isNaN(data.m2) || isNaN(data.m3)) {
        showMessage(addResult, 'All marks must be valid numbers.', 'error');
        return false;
    }
    
    if (data.m1 < 0 || data.m1 > 100 || data.m2 < 0 || data.m2 > 100 || data.m3 < 0 || data.m3 > 100) {
        showMessage(addResult, 'All marks must be between 0 and 100.', 'error');
        return false;
    }
    
    return true;
}

async function getCandidates(criteria) {
    try {

        loadingMessage.style.display = 'block';
        candidatesList.innerHTML = '';

        updateActiveButton(criteria);

        const response = await fetch(`${API_BASE_URL}/candidate/result/${criteria}`);
        
        if (response.ok) {
            const candidates = await response.json();
            displayCandidates(candidates, criteria);
        } else {
            const errorText = await response.text();
            candidatesList.innerHTML = `<div class="error">Error: ${errorText}</div>`;
        }
        
    } catch (error) {
        console.error('Error fetching candidates:', error);
        candidatesList.innerHTML = '<div class="error">Failed to connect to server. Please check if the backend is running.</div>';
    } finally {
        loadingMessage.style.display = 'none';
    }
}

function displayCandidates(candidates, criteria) {
    if (candidates.length === 0) {
        candidatesList.innerHTML = `
            <div class="no-candidates">
                <h3>No candidates found</h3>
                <p>No candidates match the selected criteria: ${criteria}</p>
            </div>
        `;
        return;
    }
    
    const candidatesHTML = candidates.map(candidate => {
        const total = candidate.m1 + candidate.m2 + candidate.m3;
        
        return `
            <div class="candidate-card">
                <div class="candidate-header">
                    <div>
                        <div class="candidate-id">${candidate.id}</div>
                        <div class="candidate-name">${candidate.name}</div>
                    </div>
                    <div>
                        <span class="result-badge result-${candidate.result.toLowerCase()}">${candidate.result}</span>
                        <span class="grade-badge">${candidate.grade}</span>
                    </div>
                </div>
                
                <div class="marks-row">
                    <div class="mark-item">
                        <strong>Subject 1</strong><br>
                        ${candidate.m1}/100
                    </div>
                    <div class="mark-item">
                        <strong>Subject 2</strong><br>
                        ${candidate.m2}/100
                    </div>
                    <div class="mark-item">
                        <strong>Subject 3</strong><br>
                        ${candidate.m3}/100
                    </div>
                </div>
                
                <div class="candidate-details">
                    <div class="detail-item">
                        <span>Total Marks:</span>
                        <strong>${total}/300</strong>
                    </div>
                    <div class="detail-item">
                        <span>Percentage:</span>
                        <strong>${((total/300) * 100).toFixed(1)}%</strong>
                    </div>
                </div>
            </div>
        `;
    }).join('');
    
    candidatesList.innerHTML = candidatesHTML;
}

function updateActiveButton(criteria) {

    document.querySelectorAll('.filter-controls .btn').forEach(btn => {
        btn.classList.remove('active');
    });

    const buttons = document.querySelectorAll('.filter-controls .btn');
    buttons.forEach(btn => {
        if ((criteria === 'ALL' && btn.textContent.includes('All')) ||
            (criteria === 'PASS' && btn.textContent.includes('Passed')) ||
            (criteria === 'FAIL' && btn.textContent.includes('Failed'))) {
            btn.classList.add('active');
        }
    });
}

function showMessage(element, message, type) {
    element.textContent = message;
    element.className = `result-message ${type}`;
    element.style.display = 'block';
    
    if (type === 'success') {
        setTimeout(() => {
            element.style.display = 'none';
        }, 5000);
    }
}

const style = document.createElement('style');
style.textContent = `
    .btn.active {
        transform: translateY(-2px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        opacity: 0.9;
    }
`;
document.head.appendChild(style);