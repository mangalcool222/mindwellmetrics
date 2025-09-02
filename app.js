// Application Data
const appData = {
  departments: [
    {"id": "ENG", "name": "Engineering", "employees": 25, "avgStress": 7.2},
    {"id": "SAL", "name": "Sales", "employees": 18, "avgStress": 8.1},
    {"id": "HR", "name": "Human Resources", "employees": 8, "avgStress": 5.4},
    {"id": "MKT", "name": "Marketing", "employees": 12, "avgStress": 6.3},
    {"id": "FIN", "name": "Finance", "employees": 10, "avgStress": 6.8},
    {"id": "OPS", "name": "Operations", "employees": 15, "avgStress": 6.1},
    {"id": "CS", "name": "Customer Support", "employees": 20, "avgStress": 7.8},
    {"id": "LEG", "name": "Legal", "employees": 5, "avgStress": 5.9}
  ],
  weeklyData: [
    {"week": "Week 1", "avgStress": 6.2, "responses": 87, "highStressPercent": 23},
    {"week": "Week 2", "avgStress": 6.8, "responses": 92, "highStressPercent": 28},
    {"week": "Week 3", "avgStress": 7.1, "responses": 89, "highStressPercent": 32},
    {"week": "Week 4", "avgStress": 6.9, "responses": 95, "highStressPercent": 29},
    {"week": "Week 5", "avgStress": 6.4, "responses": 88, "highStressPercent": 25},
    {"week": "Week 6", "avgStress": 6.7, "responses": 93, "highStressPercent": 27},
    {"week": "Week 7", "avgStress": 7.3, "responses": 90, "highStressPercent": 34},
    {"week": "Week 8", "avgStress": 6.8, "responses": 91, "highStressPercent": 30},
    {"week": "Week 9", "avgStress": 6.5, "responses": 89, "highStressPercent": 26},
    {"week": "Week 10", "avgStress": 6.9, "responses": 94, "highStressPercent": 31},
    {"week": "Week 11", "avgStress": 7.0, "responses": 88, "highStressPercent": 33},
    {"week": "Week 12", "avgStress": 6.6, "responses": 92, "highStressPercent": 28}
  ],
  workloadDistribution: [
    {"category": "Light", "count": 28, "percentage": 25},
    {"category": "Moderate", "count": 45, "percentage": 40},
    {"category": "Heavy", "count": 32, "percentage": 28},
    {"category": "Overwhelming", "count": 8, "percentage": 7}
  ],
  sleepPatterns: {
    "Engineering": 6.2,
    "Sales": 5.8,
    "HR": 7.1,
    "Marketing": 6.5,
    "Finance": 6.8,
    "Operations": 6.9,
    "Customer Support": 6.0,
    "Legal": 7.2
  },
  interventionSuggestions: [
    {
      "priority": "high",
      "department": "Sales",
      "suggestion": "Implement stress management workshops for high-pressure sales environment",
      "impact": "Could reduce stress by 15-20%"
    },
    {
      "priority": "medium",
      "department": "Customer Support",
      "suggestion": "Introduce flexible break schedules and quiet zones",
      "impact": "May improve mood scores by 10-15%"
    },
    {
      "priority": "low",
      "department": "Engineering",
      "suggestion": "Consider team building activities to improve collaboration",
      "impact": "Could enhance team cohesion and reduce individual stress"
    }
  ],
  personalData: {
    "stressHistory": [5, 4, 6, 7, 5, 6, 4, 5, 6, 7, 5, 6],
    "moodHistory": [7, 8, 6, 5, 7, 6, 8, 7, 6, 5, 7, 6],
    "sleepHistory": [7, 6, 6, 5, 7, 6, 7, 7, 6, 6, 7, 6],
    "weekLabels": ["W1", "W2", "W3", "W4", "W5", "W6", "W7", "W8", "W9", "W10", "W11", "W12"]
  }
};

// Survey questions
const surveyQuestions = [
  {
    id: 'stress',
    type: 'scale',
    question: 'How would you rate your stress level this week?',
    scale: { min: 1, max: 10, minLabel: 'Very Low', maxLabel: 'Very High' }
  },
  {
    id: 'workload',
    type: 'radio',
    question: 'How would you describe your workload this week?',
    options: ['Light', 'Moderate', 'Heavy', 'Overwhelming']
  },
  {
    id: 'sleep',
    type: 'scale',
    question: 'How many hours of sleep did you get on average?',
    scale: { min: 4, max: 12, minLabel: '4 hours', maxLabel: '12+ hours' }
  },
  {
    id: 'mood',
    type: 'scale',
    question: 'How would you rate your overall mood this week?',
    scale: { min: 1, max: 10, minLabel: 'Poor', maxLabel: 'Excellent' }
  },
  {
    id: 'comments',
    type: 'textarea',
    question: 'Any additional thoughts you\'d like to share? (Optional)',
    optional: true
  }
];

// Application state
let currentUser = null;
let currentView = 'login';
let surveyState = {
  currentQuestion: 0,
  answers: {},
  completed: false
};

// Chart instances
let charts = {};

// Motivational tips
const motivationalTips = [
  "Remember to take regular breaks and practice deep breathing to manage stress effectively.",
  "Small daily exercises like stretching can significantly improve your mood and energy levels.",
  "Staying hydrated throughout the day helps maintain focus and reduces fatigue.",
  "Consider practicing mindfulness for just 5 minutes a day to improve mental clarity.",
  "Quality sleep is essential for mental health - aim for 7-8 hours per night.",
  "Connect with colleagues and build positive relationships at work.",
  "Set realistic goals and celebrate small achievements to boost confidence."
];

// Initialize application
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM loaded, initializing app...');
  initializeApp();
});

function initializeApp() {
  console.log('App initialized');
  setupEventListeners();
  showView('login');
}

function setupEventListeners() {
  console.log('Setting up event listeners...');
  
  // Tab switching with event delegation for better reliability
  document.addEventListener('click', function(e) {
    if (e.target.classList.contains('tab-btn')) {
      e.preventDefault();
      const tab = e.target.dataset.tab;
      console.log('Tab clicked:', tab);
      switchLoginTab(tab);
    }
  });
  
  // Form submissions
  document.addEventListener('submit', function(e) {
    if (e.target.id === 'employee-form') {
      e.preventDefault();
      console.log('Employee form submitted');
      handleEmployeeLogin(e);
    } else if (e.target.id === 'hr-form') {
      e.preventDefault();
      console.log('HR form submitted');
      handleHRLogin(e);
    }
  });
  
  // Button clicks
  document.addEventListener('click', function(e) {
    if (e.target.id === 'employee-logout' || e.target.id === 'hr-logout') {
      e.preventDefault();
      handleLogout();
    } else if (e.target.id === 'close-modal') {
      e.preventDefault();
      closeModal();
    } else if (e.target.id === 'download-report') {
      e.preventDefault();
      downloadReport();
    }
  });
  
  // Time filter change
  document.addEventListener('change', function(e) {
    if (e.target.id === 'time-filter') {
      updateHRDashboard();
    }
  });
  
  console.log('Event listeners setup complete');
}

function switchLoginTab(tab) {
  console.log('Switching to tab:', tab);
  
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const targetTab = document.querySelector(`[data-tab="${tab}"]`);
  if (targetTab) {
    targetTab.classList.add('active');
    console.log('Tab button activated:', tab);
  }

  // Update form visibility
  document.querySelectorAll('.login-form').forEach(form => {
    form.classList.remove('active');
    console.log('Removed active from form:', form.id);
  });
  const targetForm = document.getElementById(`${tab}-login`);
  if (targetForm) {
    targetForm.classList.add('active');
    console.log('Form activated:', targetForm.id);
  } else {
    console.error('Target form not found:', `${tab}-login`);
  }
}

function handleEmployeeLogin(e) {
  e.preventDefault();
  console.log('Processing employee login...');
  
  const teamCodeInput = document.getElementById('team-code');
  const teamCode = teamCodeInput ? teamCodeInput.value.trim() : '';
  
  console.log('Team code entered:', teamCode);
  
  if (teamCode) {
    currentUser = {
      type: 'employee',
      teamCode: teamCode,
      department: getDepartmentFromTeamCode(teamCode)
    };
    
    console.log('Employee user created:', currentUser);
    
    const currentTeamElement = document.getElementById('current-team');
    if (currentTeamElement) {
      currentTeamElement.textContent = teamCode;
    }
    
    showView('employee');
    
    // Initialize employee dashboard after a short delay to ensure DOM is ready
    setTimeout(() => {
      initializeEmployeeDashboard();
    }, 200);
    
  } else {
    alert('Please enter a team code');
  }
}

function handleHRLogin(e) {
  e.preventDefault();
  console.log('Processing HR login...');
  
  const usernameInput = document.getElementById('hr-username');
  const passwordInput = document.getElementById('hr-password');
  
  const username = usernameInput ? usernameInput.value.trim() : '';
  const password = passwordInput ? passwordInput.value.trim() : '';
  
  console.log('HR credentials entered:', username, password ? 'password provided' : 'no password');
  
  if (username === 'admin' && password === 'admin123') {
    currentUser = {
      type: 'hr',
      username: username
    };
    
    console.log('HR user created:', currentUser);
    
    showView('hr');
    
    // Initialize HR dashboard after a short delay to ensure DOM is ready
    setTimeout(() => {
      initializeHRDashboard();
    }, 200);
    
  } else {
    alert('Invalid credentials. Please use username: admin and password: admin123');
  }
}

function handleLogout() {
  console.log('Logging out...');
  
  currentUser = null;
  surveyState = {
    currentQuestion: 0,
    answers: {},
    completed: false
  };
  
  // Clear charts
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.destroy === 'function') {
      chart.destroy();
    }
  });
  charts = {};
  
  // Reset forms
  const employeeForm = document.getElementById('employee-form');
  const hrForm = document.getElementById('hr-form');
  
  if (employeeForm) employeeForm.reset();
  if (hrForm) hrForm.reset();
  
  showView('login');
}

function showView(viewName) {
  console.log('Showing view:', viewName);
  currentView = viewName;
  
  // Hide all views
  const loginScreen = document.getElementById('login-screen');
  const employeeDashboard = document.getElementById('employee-dashboard');
  const hrDashboard = document.getElementById('hr-dashboard');
  
  if (loginScreen) {
    loginScreen.classList.add('hidden');
    console.log('Login screen hidden');
  }
  if (employeeDashboard) {
    employeeDashboard.classList.add('hidden');
    console.log('Employee dashboard hidden');
  }
  if (hrDashboard) {
    hrDashboard.classList.add('hidden');
    console.log('HR dashboard hidden');
  }
  
  // Show target view
  if (viewName === 'login' && loginScreen) {
    loginScreen.classList.remove('hidden');
    console.log('Login screen shown');
  } else if (viewName === 'employee' && employeeDashboard) {
    employeeDashboard.classList.remove('hidden');
    console.log('Employee dashboard shown');
  } else if (viewName === 'hr' && hrDashboard) {
    hrDashboard.classList.remove('hidden');
    console.log('HR dashboard shown');
  }
}

function getDepartmentFromTeamCode(teamCode) {
  // Simple mapping logic for demo
  const code = teamCode.toLowerCase();
  if (code.includes('eng') || code.includes('dev') || code.includes('tech')) return 'Engineering';
  if (code.includes('sal') || code.includes('sales')) return 'Sales';
  if (code.includes('hr') || code.includes('human')) return 'Human Resources';
  if (code.includes('mkt') || code.includes('marketing')) return 'Marketing';
  if (code.includes('fin') || code.includes('finance')) return 'Finance';
  if (code.includes('ops') || code.includes('operations')) return 'Operations';
  if (code.includes('cs') || code.includes('support')) return 'Customer Support';
  if (code.includes('leg') || code.includes('legal')) return 'Legal';
  return 'General';
}

// Employee Dashboard Functions
function initializeEmployeeDashboard() {
  console.log('Initializing employee dashboard...');
  try {
    initializeSurvey();
    createPersonalCharts();
    console.log('Employee dashboard initialized successfully');
  } catch (error) {
    console.error('Error initializing employee dashboard:', error);
  }
}

function initializeSurvey() {
  if (!surveyState.completed) {
    displayCurrentQuestion();
  } else {
    showSurveyCompleted();
  }
}

function displayCurrentQuestion() {
  const question = surveyQuestions[surveyState.currentQuestion];
  if (!question) {
    completeSurvey();
    return;
  }

  updateProgress();
  
  const questionsContainer = document.getElementById('survey-questions');
  if (!questionsContainer) return;
  
  questionsContainer.innerHTML = '';
  
  const questionDiv = document.createElement('div');
  questionDiv.className = 'question-container';
  
  const questionText = document.createElement('div');
  questionText.className = 'question-text';
  questionText.textContent = question.question;
  questionDiv.appendChild(questionText);
  
  if (question.type === 'scale') {
    const scaleDiv = document.createElement('div');
    scaleDiv.className = 'scale-input';
    
    for (let i = question.scale.min; i <= question.scale.max; i++) {
      const option = document.createElement('div');
      option.className = 'scale-option';
      option.textContent = i;
      option.dataset.value = i;
      option.addEventListener('click', function() {
        selectScaleOption(this, question.id);
      });
      scaleDiv.appendChild(option);
    }
    
    questionDiv.appendChild(scaleDiv);
    
    // Add labels
    const labelsDiv = document.createElement('div');
    labelsDiv.style.display = 'flex';
    labelsDiv.style.justifyContent = 'space-between';
    labelsDiv.style.fontSize = 'var(--font-size-xs)';
    labelsDiv.style.color = 'var(--color-text-secondary)';
    labelsDiv.innerHTML = `<span>${question.scale.minLabel}</span><span>${question.scale.maxLabel}</span>`;
    questionDiv.appendChild(labelsDiv);
    
  } else if (question.type === 'radio') {
    const radioDiv = document.createElement('div');
    radioDiv.className = 'radio-group';
    
    question.options.forEach(option => {
      const optionDiv = document.createElement('div');
      optionDiv.className = 'radio-option';
      
      const input = document.createElement('input');
      input.type = 'radio';
      input.name = question.id;
      input.value = option;
      input.id = `${question.id}-${option}`;
      
      const label = document.createElement('label');
      label.htmlFor = `${question.id}-${option}`;
      label.textContent = option;
      
      optionDiv.appendChild(input);
      optionDiv.appendChild(label);
      radioDiv.appendChild(optionDiv);
      
      input.addEventListener('change', function() {
        if (this.checked) {
          surveyState.answers[question.id] = this.value;
          const nextBtn = document.querySelector('.question-actions .btn--primary');
          if (nextBtn) {
            nextBtn.disabled = false;
          }
        }
      });
    });
    
    questionDiv.appendChild(radioDiv);
    
  } else if (question.type === 'textarea') {
    const textarea = document.createElement('textarea');
    textarea.className = 'form-control';
    textarea.rows = 4;
    textarea.placeholder = 'Share your thoughts...';
    textarea.addEventListener('input', function() {
      surveyState.answers[question.id] = this.value;
    });
    questionDiv.appendChild(textarea);
  }
  
  const actionsDiv = document.createElement('div');
  actionsDiv.className = 'question-actions';
  
  if (surveyState.currentQuestion > 0) {
    const prevBtn = document.createElement('button');
    prevBtn.className = 'btn btn--outline';
    prevBtn.type = 'button';
    prevBtn.textContent = 'Previous';
    prevBtn.addEventListener('click', previousQuestion);
    actionsDiv.appendChild(prevBtn);
  } else {
    actionsDiv.appendChild(document.createElement('div'));
  }
  
  const nextBtn = document.createElement('button');
  nextBtn.className = 'btn btn--primary';
  nextBtn.type = 'button';
  nextBtn.textContent = surveyState.currentQuestion === surveyQuestions.length - 1 ? 'Complete Survey' : 'Next';
  nextBtn.addEventListener('click', nextQuestion);
  
  if (!question.optional) {
    nextBtn.disabled = !surveyState.answers[question.id];
  }
  
  actionsDiv.appendChild(nextBtn);
  questionDiv.appendChild(actionsDiv);
  
  questionsContainer.appendChild(questionDiv);
  
  // Add to chat
  addChatMessage('bot', question.question);
}

function selectScaleOption(element, questionId) {
  // Remove previous selection
  element.parentElement.querySelectorAll('.scale-option').forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Select current
  element.classList.add('selected');
  surveyState.answers[questionId] = parseInt(element.dataset.value);
  
  // Enable next button
  const nextBtn = document.querySelector('.question-actions .btn--primary');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function addChatMessage(type, message) {
  const chatContainer = document.getElementById('survey-chat');
  if (!chatContainer) return;
  
  const messageDiv = document.createElement('div');
  messageDiv.className = `chat-message ${type}-message`;
  
  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = type === 'bot' ? '🤖' : '👤';
  
  const content = document.createElement('div');
  content.className = 'message-content';
  const p = document.createElement('p');
  p.textContent = message;
  content.appendChild(p);
  
  messageDiv.appendChild(avatar);
  messageDiv.appendChild(content);
  chatContainer.appendChild(messageDiv);
  
  // Scroll to bottom
  chatContainer.scrollTop = chatContainer.scrollHeight;
}

function updateProgress() {
  const progress = ((surveyState.currentQuestion + 1) / surveyQuestions.length) * 100;
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
  if (progressText) {
    progressText.textContent = `Question ${surveyState.currentQuestion + 1} of ${surveyQuestions.length}`;
  }
}

function nextQuestion() {
  const currentQuestion = surveyQuestions[surveyState.currentQuestion];
  
  if (!currentQuestion.optional && !surveyState.answers[currentQuestion.id]) {
    alert('Please answer this question before continuing.');
    return;
  }
  
  if (surveyState.answers[currentQuestion.id]) {
    addChatMessage('user', `${surveyState.answers[currentQuestion.id]}`);
  }
  
  surveyState.currentQuestion++;
  
  if (surveyState.currentQuestion >= surveyQuestions.length) {
    completeSurvey();
  } else {
    displayCurrentQuestion();
  }
}

function previousQuestion() {
  if (surveyState.currentQuestion > 0) {
    surveyState.currentQuestion--;
    displayCurrentQuestion();
  }
}

function completeSurvey() {
  surveyState.completed = true;
  
  // Show completion message
  const questionsContainer = document.getElementById('survey-questions');
  if (questionsContainer) {
    questionsContainer.innerHTML = `
      <div class="question-container">
        <div class="question-text">Thank you for completing this week's wellness check-in! 🎉</div>
        <p style="color: var(--color-text-secondary); text-align: center;">Your responses help us create a better workplace for everyone.</p>
      </div>
    `;
  }
  
  addChatMessage('bot', 'Thank you for taking the time to share your wellness information. Your mental health matters!');
  
  // Show success modal
  showSuccessModal();
  
  // Update progress to 100%
  const progressFill = document.getElementById('progress-fill');
  const progressText = document.getElementById('progress-text');
  
  if (progressFill) {
    progressFill.style.width = '100%';
  }
  if (progressText) {
    progressText.textContent = 'Survey Complete';
  }
}

function showSuccessModal() {
  const randomTip = motivationalTips[Math.floor(Math.random() * motivationalTips.length)];
  const dailyTip = document.getElementById('daily-tip');
  if (dailyTip) {
    dailyTip.textContent = randomTip;
  }
  
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal() {
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.add('hidden');
  }
}

function createPersonalCharts() {
  console.log('Creating personal charts...');
  
  // Destroy existing charts
  if (charts.personalStress) charts.personalStress.destroy();
  if (charts.personalMood) charts.personalMood.destroy();
  
  try {
    // Stress trend chart
    const stressCanvas = document.getElementById('personal-stress-chart');
    if (stressCanvas) {
      const stressCtx = stressCanvas.getContext('2d');
      charts.personalStress = new Chart(stressCtx, {
        type: 'line',
        data: {
          labels: appData.personalData.weekLabels,
          datasets: [{
            label: 'Stress Level',
            data: appData.personalData.stressHistory,
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: true,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10,
              title: {
                display: true,
                text: 'Stress Level (1-10)'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
    
    // Mood and sleep chart
    const moodCanvas = document.getElementById('personal-mood-chart');
    if (moodCanvas) {
      const moodCtx = moodCanvas.getContext('2d');
      charts.personalMood = new Chart(moodCtx, {
        type: 'line',
        data: {
          labels: appData.personalData.weekLabels,
          datasets: [{
            label: 'Mood',
            data: appData.personalData.moodHistory,
            borderColor: '#B4413C',
            backgroundColor: 'rgba(180, 65, 60, 0.1)',
            tension: 0.4
          }, {
            label: 'Sleep Hours',
            data: appData.personalData.sleepHistory,
            borderColor: '#FFC185',
            backgroundColor: 'rgba(255, 193, 133, 0.1)',
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      });
    }
    
    console.log('Personal charts created successfully');
  } catch (error) {
    console.error('Error creating personal charts:', error);
  }
}

// HR Dashboard Functions
function initializeHRDashboard() {
  console.log('Initializing HR dashboard...');
  try {
    updateMetrics();
    createHRCharts();
    displayInterventions();
    console.log('HR dashboard initialized successfully');
  } catch (error) {
    console.error('Error initializing HR dashboard:', error);
  }
}

function updateHRDashboard() {
  updateMetrics();
  // Charts would be updated with filtered data in a real application
}

function updateMetrics() {
  const currentWeek = appData.weeklyData[appData.weeklyData.length - 1];
  const mostStressedDept = appData.departments.reduce((prev, current) => 
    (prev.avgStress > current.avgStress) ? prev : current
  );
  
  const totalResponses = document.getElementById('total-responses');
  const avgStress = document.getElementById('avg-stress');
  const highStressPercent = document.getElementById('high-stress-percent');
  const mostStressedDeptEl = document.getElementById('most-stressed-dept');
  
  if (totalResponses) totalResponses.textContent = currentWeek.responses;
  if (avgStress) avgStress.textContent = currentWeek.avgStress.toFixed(1);
  if (highStressPercent) highStressPercent.textContent = `${currentWeek.highStressPercent}%`;
  if (mostStressedDeptEl) mostStressedDeptEl.textContent = mostStressedDept.name;
  
  // Update alert styling
  const alertCard = document.querySelector('.alert-card');
  if (alertCard) {
    if (currentWeek.highStressPercent > 30) {
      alertCard.style.borderColor = 'var(--color-error)';
    } else if (currentWeek.highStressPercent > 20) {
      alertCard.style.borderColor = 'var(--color-warning)';
    }
  }
}

function createHRCharts() {
  console.log('Creating HR charts...');
  
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];
  
  try {
    // Department stress chart
    const deptCanvas = document.getElementById('department-stress-chart');
    if (deptCanvas) {
      if (charts.departmentStress) charts.departmentStress.destroy();
      
      const deptCtx = deptCanvas.getContext('2d');
      charts.departmentStress = new Chart(deptCtx, {
        type: 'bar',
        data: {
          labels: appData.departments.map(d => d.name),
          datasets: [{
            label: 'Average Stress Level',
            data: appData.departments.map(d => d.avgStress),
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
    
    // Stress trends chart
    const trendsCanvas = document.getElementById('stress-trends-chart');
    if (trendsCanvas) {
      if (charts.stressTrends) charts.stressTrends.destroy();
      
      const trendsCtx = trendsCanvas.getContext('2d');
      charts.stressTrends = new Chart(trendsCtx, {
        type: 'line',
        data: {
          labels: appData.weeklyData.map(w => w.week),
          datasets: [{
            label: 'Average Stress',
            data: appData.weeklyData.map(w => w.avgStress),
            borderColor: '#1FB8CD',
            backgroundColor: 'rgba(31, 184, 205, 0.1)',
            fill: true,
            tension: 0.4
          }, {
            label: 'High Stress %',
            data: appData.weeklyData.map(w => w.highStressPercent / 10), // Scale for visibility
            borderColor: '#DB4545',
            backgroundColor: 'rgba(219, 69, 69, 0.1)',
            fill: false,
            tension: 0.4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10
            }
          }
        }
      });
    }
    
    // Workload distribution chart
    const workloadCanvas = document.getElementById('workload-chart');
    if (workloadCanvas) {
      if (charts.workload) charts.workload.destroy();
      
      const workloadCtx = workloadCanvas.getContext('2d');
      charts.workload = new Chart(workloadCtx, {
        type: 'pie',
        data: {
          labels: appData.workloadDistribution.map(w => w.category),
          datasets: [{
            data: appData.workloadDistribution.map(w => w.percentage),
            backgroundColor: colors.slice(0, 4)
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false
        }
      });
    }
    
    // Sleep patterns chart
    const sleepCanvas = document.getElementById('sleep-chart');
    if (sleepCanvas) {
      if (charts.sleep) charts.sleep.destroy();
      
      const sleepCtx = sleepCanvas.getContext('2d');
      charts.sleep = new Chart(sleepCtx, {
        type: 'bar',
        data: {
          labels: Object.keys(appData.sleepPatterns),
          datasets: [{
            label: 'Average Sleep Hours',
            data: Object.values(appData.sleepPatterns),
            backgroundColor: '#FFC185',
            borderColor: '#FFC185',
            borderWidth: 1
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
              max: 10,
              title: {
                display: true,
                text: 'Hours'
              }
            }
          },
          plugins: {
            legend: {
              display: false
            }
          }
        }
      });
    }
    
    console.log('HR charts created successfully');
  } catch (error) {
    console.error('Error creating HR charts:', error);
  }
}

function displayInterventions() {
  const interventionsList = document.getElementById('interventions-list');
  if (!interventionsList) return;
  
  interventionsList.innerHTML = '';
  
  appData.interventionSuggestions.forEach(intervention => {
    const interventionDiv = document.createElement('div');
    interventionDiv.className = `intervention-item priority-${intervention.priority}`;
    
    interventionDiv.innerHTML = `
      <div class="intervention-header">
        <span class="intervention-priority ${intervention.priority}">${intervention.priority} Priority</span>
        <span class="intervention-department">${intervention.department}</span>
      </div>
      <p class="intervention-suggestion">${intervention.suggestion}</p>
      <p class="intervention-impact">${intervention.impact}</p>
    `;
    
    interventionsList.appendChild(interventionDiv);
  });
}

function downloadReport() {
  // Simulate PDF download
  const reportContent = `
Mental Health Weekly Report
Generated: ${new Date().toLocaleDateString()}

Key Metrics:
- Total Responses: ${document.getElementById('total-responses')?.textContent || 'N/A'}
- Average Stress Level: ${document.getElementById('avg-stress')?.textContent || 'N/A'}
- High Stress Employees: ${document.getElementById('high-stress-percent')?.textContent || 'N/A'}
- Most Stressed Department: ${document.getElementById('most-stressed-dept')?.textContent || 'N/A'}

Recommendations:
- Implement stress management workshops
- Consider flexible working arrangements
- Schedule team wellness activities
- Monitor departments with high stress levels

This report has been generated automatically based on anonymous survey data.
  `;
  
  const blob = new Blob([reportContent], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mental-health-report-${new Date().toISOString().split('T')[0]}.txt`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  alert('Report downloaded successfully! (Note: In a real application, this would be a formatted PDF)');
}