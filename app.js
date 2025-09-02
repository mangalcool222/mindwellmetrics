// Application Data Structure
const appData = {
  // Sample users for demo
  users: [
    {
      id: 1,
      email: "employee@demo.com",
      password: "demo123",
      role: "employee",
      fullName: "John Smith",
      department: "Engineering",
      team: "Frontend Team",
      isActive: true,
      createdAt: "2025-08-01"
    },
    {
      id: 2,
      email: "hr@demo.com",
      password: "demo123",
      role: "hr",
      fullName: "Sarah Johnson",
      department: "Human Resources",
      team: "People Operations",
      isActive: true,
      createdAt: "2025-08-01"
    },
    {
      id: 3,
      email: "admin@demo.com",
      password: "demo123",
      role: "admin",
      fullName: "Mike Wilson",
      department: "IT",
      team: "System Administration",
      isActive: true,
      createdAt: "2025-08-01"
    }
  ],

  // Departments and teams
  departments: [
    {id: 1, name: "Engineering", description: "Software development and technical teams"},
    {id: 2, name: "Sales", description: "Sales and business development teams"},
    {id: 3, name: "Marketing", description: "Marketing and communications teams"},
    {id: 4, name: "Human Resources", description: "HR and people operations teams"},
    {id: 5, name: "Finance", description: "Finance and accounting teams"},
    {id: 6, name: "Operations", description: "Operations and logistics teams"},
    {id: 7, name: "Customer Support", description: "Customer service and support teams"},
    {id: 8, name: "Legal", description: "Legal and compliance teams"}
  ],

  teams: [
    {id: 1, name: "Frontend Team", departmentId: 1},
    {id: 2, name: "Backend Team", departmentId: 1},
    {id: 3, name: "Enterprise Sales", departmentId: 2},
    {id: 4, name: "Inside Sales", departmentId: 2},
    {id: 5, name: "Digital Marketing", departmentId: 3},
    {id: 6, name: "Content Marketing", departmentId: 3},
    {id: 7, name: "Recruitment", departmentId: 4},
    {id: 8, name: "People Operations", departmentId: 4}
  ],

  // Survey questions
  surveyQuestions: [
    {
      id: 'stress',
      type: 'scale',
      question: 'How would you rate your overall stress level today?',
      scale: {min: 1, max: 5, labels: ['Very Low', 'Low', 'Moderate', 'High', 'Very High']}
    },
    {
      id: 'mood',
      type: 'scale',
      question: 'How would you rate your mood today?',
      scale: {min: 1, max: 5, labels: ['😢 Poor', '😕 Fair', '😐 Neutral', '😊 Good', '😄 Excellent']}
    },
    {
      id: 'workload',
      type: 'scale',
      question: 'How manageable is your current workload?',
      scale: {min: 1, max: 5, labels: ['Very Light', 'Light', 'Moderate', 'Heavy', 'Overwhelming']}
    },
    {
      id: 'support',
      type: 'scale',
      question: 'How supported do you feel by your team and management?',
      scale: {min: 1, max: 5, labels: ['Not at all', 'Slightly', 'Moderately', 'Very', 'Extremely']}
    }
  ],

  // Motivational quotes
  motivationalQuotes: [
    "Take time to make your soul happy.",
    "Progress, not perfection.",
    "Your mental health is a priority.",
    "It's okay to not be okay sometimes.",
    "Self-care is not selfish.",
    "You are stronger than you think.",
    "Every small step counts.",
    "Your wellbeing matters."
  ],

  // Sample stress entries for analytics
  stressEntries: [
    {id: 1, userId: 1, stressLevel: 3, moodRating: 4, workload: 3, support: 4, entryDate: "2025-08-25", notes: "Feeling good today"},
    {id: 2, userId: 1, stressLevel: 2, moodRating: 5, workload: 2, support: 4, entryDate: "2025-08-26", notes: "Great day!"},
    {id: 3, userId: 1, stressLevel: 4, moodRating: 3, workload: 4, support: 3, entryDate: "2025-08-27", notes: "Busy day"},
    {id: 4, userId: 1, stressLevel: 3, moodRating: 4, workload: 3, support: 4, entryDate: "2025-08-28", notes: ""},
    {id: 5, userId: 1, stressLevel: 2, moodRating: 4, workload: 2, support: 5, entryDate: "2025-08-29", notes: "Good support from team"},
    {id: 6, userId: 1, stressLevel: 3, moodRating: 3, workload: 3, support: 4, entryDate: "2025-08-30", notes: ""},
    {id: 7, userId: 1, stressLevel: 4, moodRating: 2, workload: 5, support: 3, entryDate: "2025-09-01", notes: "Heavy workload today"}
  ],

  // HR Analytics data
  hrAnalytics: {
    departmentStats: [
      {department: "Engineering", avgStress: 3.2, avgMood: 3.8, employees: 25, highStressCount: 6},
      {department: "Sales", avgStress: 4.1, avgMood: 3.2, employees: 18, highStressCount: 8},
      {department: "Marketing", avgStress: 3.5, avgMood: 3.9, employees: 12, highStressCount: 3},
      {department: "Human Resources", avgStress: 2.8, avgMood: 4.2, employees: 8, highStressCount: 1},
      {department: "Finance", avgStress: 3.3, avgMood: 3.7, employees: 10, highStressCount: 2},
      {department: "Operations", avgStress: 3.1, avgMood: 3.8, employees: 15, highStressCount: 3},
      {department: "Customer Support", avgStress: 3.9, avgMood: 3.4, employees: 20, highStressCount: 7},
      {department: "Legal", avgStress: 2.9, avgMood: 4.0, employees: 5, highStressCount: 1}
    ],
    weeklyTrends: [
      {week: "Week 1", avgStress: 3.2, avgMood: 3.8, participation: 87},
      {week: "Week 2", avgStress: 3.4, avgMood: 3.7, participation: 92},
      {week: "Week 3", avgStress: 3.6, avgMood: 3.5, participation: 89},
      {week: "Week 4", avgStress: 3.3, avgMood: 3.9, participation: 95},
      {week: "Week 5", avgStress: 3.1, avgMood: 4.0, participation: 88},
      {week: "Week 6", avgStress: 3.5, avgMood: 3.6, participation: 93},
      {week: "Week 7", avgStress: 3.7, avgMood: 3.4, participation: 90},
      {week: "Week 8", avgStress: 3.4, avgMood: 3.8, participation: 91}
    ]
  },

  // Resources
  resources: [
    {
      id: 1,
      title: "5-Minute Breathing Exercise",
      description: "Simple breathing techniques to reduce stress and anxiety",
      type: "exercise",
      content: "Focus on your breath. Inhale for 4 counts, hold for 4, exhale for 6. Repeat for 5 minutes."
    },
    {
      id: 2,
      title: "Managing Work Stress",
      description: "Evidence-based strategies for handling workplace pressure",
      type: "article",
      content: "Learn to prioritize tasks, set boundaries, and communicate effectively with your team."
    },
    {
      id: 3,
      title: "Work-Life Balance Tips",
      description: "Practical advice for maintaining healthy boundaries",
      type: "article",
      content: "Create clear separation between work and personal time. Set specific work hours and stick to them."
    },
    {
      id: 4,
      title: "Mindfulness Meditation",
      description: "10-minute guided meditation for stress relief",
      type: "exercise",
      content: "Find a quiet space, close your eyes, and focus on the present moment. Let thoughts pass without judgment."
    }
  ]
};

// Application State
let currentUser = null;
let currentView = 'landing';
let surveyState = {
  currentQuestion: 0,
  answers: {},
  completed: false
};
let charts = {};
let journalEntries = [];
let breathingInterval = null;

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
  console.log('HR Mental Health App initialized');
  initializeApp();
});

function initializeApp() {
  setupEventListeners();
  loadStoredData();
  showView('landing-page');
  rotateMotivationalQuote();
  
  // Rotate quotes every 30 seconds
  setInterval(rotateMotivationalQuote, 30000);
}

function setupEventListeners() {
  console.log('Event listeners ready');
}

function loadStoredData() {
  // Load journal entries from localStorage simulation
  try {
    const stored = localStorage.getItem('journalEntries');
    if (stored) {
      journalEntries = JSON.parse(stored);
    }
  } catch (e) {
    journalEntries = [];
  }
}

// View Management
function showView(viewId) {
  console.log('Showing view:', viewId);
  
  // Hide all views
  const views = ['landing-page', 'register-page', 'login-page', 'employee-dashboard', 'hr-dashboard', 'admin-dashboard'];
  views.forEach(view => {
    const element = document.getElementById(view);
    if (element) {
      element.classList.add('hidden');
    }
  });
  
  // Show target view
  const targetView = document.getElementById(viewId);
  if (targetView) {
    targetView.classList.remove('hidden');
    currentView = viewId;
    
    // Initialize view-specific functionality
    if (viewId === 'employee-dashboard') {
      initializeEmployeeDashboard();
    } else if (viewId === 'hr-dashboard') {
      initializeHRDashboard();
    } else if (viewId === 'admin-dashboard') {
      initializeAdminDashboard();
    }
  }
}

// Navigation Functions - Fixed to work properly
function showLanding() {
  showView('landing-page');
}

function showRegister() {
  showView('register-page');
  // Ensure first tab is active
  switchRegisterTab('employee');
}

function showLogin() {
  showView('login-page');
}

// Authentication Functions
function switchRegisterTab(tabName) {
  // Update tab buttons
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeTab = document.querySelector(`[data-tab="${tabName}"]`);
  if (activeTab) {
    activeTab.classList.add('active');
  }
  
  // Update form visibility
  document.querySelectorAll('.auth-form').forEach(form => {
    form.classList.remove('active');
  });
  const activeForm = document.getElementById(`${tabName}-register`);
  if (activeForm) {
    activeForm.classList.add('active');
  }
}

function handleRegister(event, role) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const userData = {
    fullName: formData.get('fullName'),
    email: formData.get('email'),
    password: formData.get('password'),
    department: formData.get('department'),
    team: formData.get('team'),
    role: role
  };
  
  // Validate admin key for admin registration
  if (role === 'admin') {
    const adminKey = formData.get('adminKey');
    if (adminKey !== 'admin123') {
      alert('Invalid admin key. Use: admin123');
      return;
    }
  }
  
  // Check if email already exists
  const existingUser = appData.users.find(user => user.email === userData.email);
  if (existingUser) {
    alert('Email already registered. Please use a different email or try logging in.');
    return;
  }
  
  // Create new user
  const newUser = {
    id: appData.users.length + 1,
    ...userData,
    isActive: true,
    createdAt: new Date().toISOString().split('T')[0]
  };
  
  appData.users.push(newUser);
  
  // Auto-login after registration
  currentUser = newUser;
  
  showSuccessModal('Account created successfully! Welcome to the platform.');
  
  setTimeout(() => {
    closeModal('success-modal');
    redirectToDashboard(role);
  }, 2000);
}

function handleLogin(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const email = formData.get('email');
  const password = formData.get('password');
  
  const user = appData.users.find(u => u.email === email && u.password === password);
  
  if (user && user.isActive) {
    currentUser = user;
    redirectToDashboard(user.role);
  } else {
    alert('Invalid credentials. Try demo accounts: employee@demo.com / hr@demo.com / admin@demo.com with password: demo123');
  }
}

function loginDemo(role) {
  const demoUsers = {
    employee: appData.users.find(u => u.role === 'employee'),
    hr: appData.users.find(u => u.role === 'hr'),
    admin: appData.users.find(u => u.role === 'admin')
  };
  
  currentUser = demoUsers[role];
  redirectToDashboard(role);
}

function redirectToDashboard(role) {
  switch (role) {
    case 'employee':
      showView('employee-dashboard');
      break;
    case 'hr':
      showView('hr-dashboard');
      break;
    case 'admin':
      showView('admin-dashboard');
      break;
  }
}

function handleLogout() {
  currentUser = null;
  surveyState = { currentQuestion: 0, answers: {}, completed: false };
  
  // Clear charts
  Object.values(charts).forEach(chart => {
    if (chart && typeof chart.destroy === 'function') {
      chart.destroy();
    }
  });
  charts = {};
  
  showView('landing-page');
}

// Employee Dashboard Functions
function initializeEmployeeDashboard() {
  if (!currentUser) return;
  
  const nameElement = document.getElementById('employee-name');
  if (nameElement) {
    nameElement.textContent = currentUser.fullName;
  }
  
  initializeSurvey();
  switchEmployeeTab('survey');
  rotateMotivationalQuote();
  loadJournalEntries();
}

function switchEmployeeTab(tabName) {
  // Update nav items
  document.querySelectorAll('#employee-dashboard .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNav = document.querySelector(`#employee-dashboard [data-tab="${tabName}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }
  
  // Update content
  document.querySelectorAll('#employee-dashboard .tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const activeContent = document.getElementById(`employee-${tabName}`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  // Initialize tab-specific content
  if (tabName === 'analytics') {
    setTimeout(createEmployeeCharts, 100); // Delay for DOM to be ready
  }
}

function initializeSurvey() {
  surveyState = { currentQuestion: 0, answers: {}, completed: false };
  displaySurveyQuestion();
}

function displaySurveyQuestion() {
  const question = appData.surveyQuestions[surveyState.currentQuestion];
  if (!question) {
    completeSurvey();
    return;
  }
  
  updateSurveyProgress();
  
  const content = document.getElementById('survey-content');
  if (!content) return;
  
  content.innerHTML = `
    <div class="question-container">
      <div class="question-title">${question.question}</div>
      <div class="scale-input" id="scale-${question.id}">
        ${question.scale.labels.map((label, index) => `
          <div class="scale-option" data-value="${index + 1}" onclick="selectScaleOption('${question.id}', ${index + 1})">
            <div>${index + 1}</div>
            <small>${label}</small>
          </div>
        `).join('')}
      </div>
      <div class="survey-actions">
        ${surveyState.currentQuestion > 0 ? '<button class="btn btn--outline" onclick="previousQuestion()">Previous</button>' : '<div></div>'}
        <button class="btn btn--primary" id="next-btn" onclick="nextQuestion()" disabled>
          ${surveyState.currentQuestion === appData.surveyQuestions.length - 1 ? 'Complete Survey' : 'Next'}
        </button>
      </div>
    </div>
  `;
}

function selectScaleOption(questionId, value) {
  // Remove previous selection
  document.querySelectorAll(`#scale-${questionId} .scale-option`).forEach(opt => {
    opt.classList.remove('selected');
  });
  
  // Select current
  event.target.closest('.scale-option').classList.add('selected');
  surveyState.answers[questionId] = value;
  
  // Enable next button
  const nextBtn = document.getElementById('next-btn');
  if (nextBtn) {
    nextBtn.disabled = false;
  }
}

function nextQuestion() {
  surveyState.currentQuestion++;
  if (surveyState.currentQuestion >= appData.surveyQuestions.length) {
    completeSurvey();
  } else {
    displaySurveyQuestion();
  }
}

function previousQuestion() {
  if (surveyState.currentQuestion > 0) {
    surveyState.currentQuestion--;
    displaySurveyQuestion();
  }
}

function completeSurvey() {
  // Save survey data
  const entry = {
    id: appData.stressEntries.length + 1,
    userId: currentUser.id,
    ...surveyState.answers,
    entryDate: new Date().toISOString().split('T')[0],
    notes: ''
  };
  
  appData.stressEntries.push(entry);
  
  // Show completion
  const content = document.getElementById('survey-content');
  if (content) {
    content.innerHTML = `
      <div class="question-container" style="text-align: center;">
        <h3>🎉 Survey Complete!</h3>
        <p>Thank you for taking the time to share your wellness information.</p>
        <button class="btn btn--primary" onclick="initializeSurvey()">Take Another Survey</button>
      </div>
    `;
  }
  
  updateSurveyProgress(100);
  showSuccessModal('Survey submitted successfully! Your wellness data helps create a better workplace for everyone.');
}

function updateSurveyProgress(override = null) {
  const progress = override || ((surveyState.currentQuestion / appData.surveyQuestions.length) * 100);
  const progressFill = document.getElementById('survey-progress-fill');
  const progressText = document.getElementById('survey-progress-text');
  
  if (progressFill) {
    progressFill.style.width = `${progress}%`;
  }
  if (progressText) {
    progressText.textContent = override ? 'Complete' : `Question ${surveyState.currentQuestion + 1} of ${appData.surveyQuestions.length}`;
  }
}

function createEmployeeCharts() {
  const userEntries = appData.stressEntries.filter(entry => entry.userId === currentUser.id);
  
  if (userEntries.length === 0) {
    const stressChart = document.getElementById('employee-stress-chart');
    const moodChart = document.getElementById('employee-mood-chart');
    
    if (stressChart && stressChart.parentElement) {
      stressChart.parentElement.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 60px;">Complete some surveys to see your analytics!</p>';
    }
    if (moodChart && moodChart.parentElement) {
      moodChart.parentElement.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary); padding: 60px;">Your mood trends will appear here!</p>';
    }
    return;
  }
  
  // Stress chart
  const stressCanvas = document.getElementById('employee-stress-chart');
  if (stressCanvas) {
    if (charts.employeeStress) {
      charts.employeeStress.destroy();
    }
    
    const stressCtx = stressCanvas.getContext('2d');
    charts.employeeStress = new Chart(stressCtx, {
      type: 'line',
      data: {
        labels: userEntries.map(entry => new Date(entry.entryDate).toLocaleDateString()),
        datasets: [{
          label: 'Stress Level',
          data: userEntries.map(entry => entry.stressLevel || entry.stress || 3),
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
            max: 5,
            title: {
              display: true,
              text: 'Stress Level (1-5)'
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
  
  // Mood chart
  const moodCanvas = document.getElementById('employee-mood-chart');
  if (moodCanvas) {
    if (charts.employeeMood) {
      charts.employeeMood.destroy();
    }
    
    const moodCtx = moodCanvas.getContext('2d');
    charts.employeeMood = new Chart(moodCtx, {
      type: 'bar',
      data: {
        labels: userEntries.map(entry => new Date(entry.entryDate).toLocaleDateString()),
        datasets: [{
          label: 'Mood',
          data: userEntries.map(entry => entry.moodRating || entry.mood || 3),
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
            max: 5,
            title: {
              display: true,
              text: 'Mood Rating (1-5)'
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
  
  // Update stats
  const avgStress = userEntries.reduce((sum, entry) => sum + (entry.stressLevel || entry.stress || 3), 0) / userEntries.length;
  const avgMood = userEntries.reduce((sum, entry) => sum + (entry.moodRating || entry.mood || 3), 0) / userEntries.length;
  
  const avgStressStat = document.getElementById('avg-stress-stat');
  const avgMoodStat = document.getElementById('avg-mood-stat');
  const daysLoggedStat = document.getElementById('days-logged-stat');
  
  if (avgStressStat) avgStressStat.textContent = avgStress.toFixed(1);
  if (avgMoodStat) avgMoodStat.textContent = avgMood.toFixed(1);
  if (daysLoggedStat) daysLoggedStat.textContent = `${userEntries.length}/7`;
}

// Journal Functions
function addJournalEntry() {
  const textArea = document.getElementById('journal-text');
  if (!textArea) return;
  
  const text = textArea.value.trim();
  if (!text) {
    alert('Please enter some text for your journal entry.');
    return;
  }
  
  const entry = {
    id: journalEntries.length + 1,
    userId: currentUser.id,
    content: text,
    date: new Date().toISOString(),
    createdAt: new Date().toLocaleDateString()
  };
  
  journalEntries.push(entry);
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
  
  textArea.value = '';
  loadJournalEntries();
  
  showSuccessModal('Journal entry saved successfully!');
}

function loadJournalEntries() {
  if (!currentUser) return;
  
  const userEntries = journalEntries.filter(entry => entry.userId === currentUser.id);
  const container = document.getElementById('journal-entries');
  
  if (!container) return;
  
  if (userEntries.length === 0) {
    container.innerHTML = '<p style="text-align: center; color: var(--color-text-secondary);">No journal entries yet. Start writing!</p>';
    return;
  }
  
  container.innerHTML = userEntries.reverse().map(entry => `
    <div class="journal-entry">
      <div class="journal-entry-header">
        <span class="journal-entry-date">${entry.createdAt}</span>
        <div class="journal-entry-actions">
          <button class="btn btn--outline btn--sm" onclick="editJournalEntry(${entry.id})">Edit</button>
          <button class="btn btn--outline btn--sm" onclick="deleteJournalEntry(${entry.id})">Delete</button>
        </div>
      </div>
      <p class="journal-entry-content">${entry.content}</p>
    </div>
  `).join('');
}

function editJournalEntry(entryId) {
  const entry = journalEntries.find(e => e.id === entryId);
  if (entry) {
    const textArea = document.getElementById('journal-text');
    if (textArea) {
      textArea.value = entry.content;
    }
    deleteJournalEntry(entryId);
  }
}

function deleteJournalEntry(entryId) {
  journalEntries = journalEntries.filter(entry => entry.id !== entryId);
  localStorage.setItem('journalEntries', JSON.stringify(journalEntries));
  loadJournalEntries();
}

// Resources Functions
function startBreathingExercise() {
  const modal = document.getElementById('breathing-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function startMeditation() {
  showSuccessModal('🧘 Starting meditation session... Find a comfortable position and focus on your breathing for the next 10 minutes.');
}

function openResource(resourceId) {
  const resource = appData.resources.find(r => r.id.toString() === resourceId.toString() || r.title.toLowerCase().includes(resourceId));
  if (resource) {
    showSuccessModal(`📚 ${resource.title}: ${resource.content}`);
  } else {
    showSuccessModal('📚 This resource contains helpful information and exercises to support your mental health and wellbeing.');
  }
}

// HR Dashboard Functions
function initializeHRDashboard() {
  updateHRMetrics();
  setTimeout(() => {
    createHRCharts();
    displayHRInterventions();
  }, 100);
}

function updateHRDashboard() {
  updateHRMetrics();
}

function updateHRMetrics() {
  const stats = appData.hrAnalytics.departmentStats;
  const totalEmployees = stats.reduce((sum, dept) => sum + dept.employees, 0);
  const totalHighStress = stats.reduce((sum, dept) => sum + dept.highStressCount, 0);
  const avgParticipation = appData.hrAnalytics.weeklyTrends.slice(-1)[0].participation;
  const avgWellbeing = stats.reduce((sum, dept) => sum + (6 - dept.avgStress), 0) / stats.length;
  
  const elements = {
    'total-employees': totalEmployees,
    'participation-rate': `${avgParticipation}%`,
    'high-stress-count': totalHighStress,
    'avg-wellbeing': avgWellbeing.toFixed(1)
  };
  
  Object.entries(elements).forEach(([id, value]) => {
    const element = document.getElementById(id);
    if (element) {
      element.textContent = value;
    }
  });
}

function createHRCharts() {
  const colors = ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325'];
  
  // Department stress chart
  const deptCanvas = document.getElementById('hr-dept-stress-chart');
  if (deptCanvas) {
    if (charts.hrDeptStress) charts.hrDeptStress.destroy();
    
    const deptCtx = deptCanvas.getContext('2d');
    charts.hrDeptStress = new Chart(deptCtx, {
      type: 'bar',
      data: {
        labels: appData.hrAnalytics.departmentStats.map(d => d.department),
        datasets: [{
          label: 'Average Stress Level',
          data: appData.hrAnalytics.departmentStats.map(d => d.avgStress),
          backgroundColor: colors,
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            max: 5,
            title: {
              display: true,
              text: 'Stress Level (1-5)'
            }
          }
        },
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
  
  // Trends chart
  const trendsCanvas = document.getElementById('hr-trends-chart');
  if (trendsCanvas) {
    if (charts.hrTrends) charts.hrTrends.destroy();
    
    const trendsCtx = trendsCanvas.getContext('2d');
    charts.hrTrends = new Chart(trendsCtx, {
      type: 'line',
      data: {
        labels: appData.hrAnalytics.weeklyTrends.map(w => w.week),
        datasets: [{
          label: 'Avg Stress',
          data: appData.hrAnalytics.weeklyTrends.map(w => w.avgStress),
          borderColor: '#DB4545',
          backgroundColor: 'rgba(219, 69, 69, 0.1)',
          fill: true,
          tension: 0.4
        }, {
          label: 'Avg Mood',
          data: appData.hrAnalytics.weeklyTrends.map(w => w.avgMood),
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
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
            max: 5
          }
        }
      }
    });
  }
  
  // Distribution chart
  const distCanvas = document.getElementById('hr-distribution-chart');
  if (distCanvas) {
    if (charts.hrDistribution) charts.hrDistribution.destroy();
    
    const distCtx = distCanvas.getContext('2d');
    charts.hrDistribution = new Chart(distCtx, {
      type: 'pie',
      data: {
        labels: ['Low Stress (1-2)', 'Moderate Stress (3)', 'High Stress (4-5)'],
        datasets: [{
          data: [45, 35, 20],
          backgroundColor: ['#1FB8CD', '#FFC185', '#DB4545']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
  
  // Participation chart
  const partCanvas = document.getElementById('hr-participation-chart');
  if (partCanvas) {
    if (charts.hrParticipation) charts.hrParticipation.destroy();
    
    const partCtx = partCanvas.getContext('2d');
    charts.hrParticipation = new Chart(partCtx, {
      type: 'doughnut',
      data: {
        labels: appData.hrAnalytics.departmentStats.map(d => d.department),
        datasets: [{
          data: appData.hrAnalytics.departmentStats.map(d => d.employees),
          backgroundColor: colors
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    });
  }
}

function displayHRInterventions() {
  const alertsContainer = document.getElementById('priority-alerts');
  const recommendationsContainer = document.getElementById('recommendations');
  
  if (!alertsContainer || !recommendationsContainer) return;
  
  // High stress departments
  const highStressDepts = appData.hrAnalytics.departmentStats.filter(d => d.avgStress >= 3.5);
  
  alertsContainer.innerHTML = highStressDepts.map(dept => `
    <div class="alert-item ${dept.avgStress >= 4 ? 'high' : 'medium'}">
      <div class="alert-title">⚠️ ${dept.department} - High Stress Alert</div>
      <div class="alert-description">
        Average stress level: ${dept.avgStress.toFixed(1)}/5 
        (${dept.highStressCount}/${dept.employees} employees reporting high stress)
      </div>
    </div>
  `).join('');
  
  // Recommendations
  const recommendations = [
    {
      title: "Stress Management Workshops",
      description: "Organize workshops for Sales and Customer Support teams to address high stress levels"
    },
    {
      title: "Flexible Work Arrangements",
      description: "Consider implementing flexible schedules for departments with moderate stress"
    },
    {
      title: "Team Building Activities",
      description: "Schedule team building events to improve morale and reduce workplace tension"
    }
  ];
  
  recommendationsContainer.innerHTML = recommendations.map(rec => `
    <div class="recommendation-item">
      <div class="recommendation-title">💡 ${rec.title}</div>
      <div class="recommendation-description">${rec.description}</div>
    </div>
  `).join('');
}

function downloadHRReport() {
  const reportData = {
    generated: new Date().toLocaleDateString(),
    totalEmployees: appData.hrAnalytics.departmentStats.reduce((sum, d) => sum + d.employees, 0),
    highStressEmployees: appData.hrAnalytics.departmentStats.reduce((sum, d) => sum + d.highStressCount, 0),
    departmentStats: appData.hrAnalytics.departmentStats
  };
  
  const csvContent = [
    'HR Mental Health Report',
    `Generated: ${reportData.generated}`,
    '',
    'Department,Employees,Avg Stress,Avg Mood,High Stress Count',
    ...reportData.departmentStats.map(d => 
      `${d.department},${d.employees},${d.avgStress},${d.avgMood},${d.highStressCount}`
    )
  ].join('\n');
  
  const blob = new Blob([csvContent], { type: 'text/csv' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `hr-mental-health-report-${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showSuccessModal('📊 HR Report downloaded successfully!');
}

// Admin Dashboard Functions
function initializeAdminDashboard() {
  switchAdminTab('overview');
  loadUsersTable();
}

function switchAdminTab(tabName) {
  // Update nav items
  document.querySelectorAll('#admin-dashboard .nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const activeNav = document.querySelector(`#admin-dashboard [data-tab="${tabName}"]`);
  if (activeNav) {
    activeNav.classList.add('active');
  }
  
  // Update content
  document.querySelectorAll('#admin-dashboard .tab-content').forEach(content => {
    content.classList.remove('active');
  });
  const activeContent = document.getElementById(`admin-${tabName}`);
  if (activeContent) {
    activeContent.classList.add('active');
  }
  
  if (tabName === 'overview') {
    setTimeout(createAdminCharts, 100);
  }
}

function createAdminCharts() {
  const activityCanvas = document.getElementById('admin-activity-chart');
  if (activityCanvas) {
    if (charts.adminActivity) charts.adminActivity.destroy();
    
    const activityCtx = activityCanvas.getContext('2d');
    charts.adminActivity = new Chart(activityCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
          label: 'User Logins',
          data: [120, 135, 128, 142, 138, 155, 148, 162],
          borderColor: '#1FB8CD',
          backgroundColor: 'rgba(31, 184, 205, 0.1)',
          fill: true,
          tension: 0.4
        }, {
          label: 'Survey Submissions',
          data: [98, 105, 102, 115, 108, 122, 118, 128],
          borderColor: '#FFC185',
          backgroundColor: 'rgba(255, 193, 133, 0.1)',
          fill: false,
          tension: 0.4
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}

function loadUsersTable() {
  const tbody = document.getElementById('users-table-body');
  if (!tbody) return;
  
  tbody.innerHTML = appData.users.map(user => `
    <tr>
      <td>${user.fullName}</td>
      <td>${user.email}</td>
      <td>${user.role}</td>
      <td>${user.department}</td>
      <td><span class="user-status ${user.isActive ? 'active' : 'inactive'}">${user.isActive ? 'Active' : 'Inactive'}</span></td>
      <td>
        <div class="user-actions">
          <button class="btn btn--outline btn--sm" onclick="editUser(${user.id})">Edit</button>
          <button class="btn btn--outline btn--sm" onclick="toggleUserStatus(${user.id})">${user.isActive ? 'Deactivate' : 'Activate'}</button>
        </div>
      </td>
    </tr>
  `).join('');
}

function editUser(userId) {
  const user = appData.users.find(u => u.id === userId);
  if (user) {
    showSuccessModal(`Editing user: ${user.fullName} (${user.email}). In a full application, this would open an edit form.`);
  }
}

function toggleUserStatus(userId) {
  const user = appData.users.find(u => u.id === userId);
  if (user) {
    user.isActive = !user.isActive;
    loadUsersTable();
    showSuccessModal(`User ${user.fullName} ${user.isActive ? 'activated' : 'deactivated'} successfully.`);
  }
}

function viewStressData() {
  const count = appData.stressEntries.length;
  showSuccessModal(`📊 Viewing ${count} stress entries. In a full application, this would display a detailed data table with filtering and export options.`);
}

function viewJournalData() {
  const count = journalEntries.length;
  showSuccessModal(`📔 Viewing ${count} journal entries. In a full application, this would display anonymized journal data for analysis.`);
}

function exportAllData() {
  const data = {
    users: appData.users.length,
    stressEntries: appData.stressEntries.length,
    journalEntries: journalEntries.length,
    exportDate: new Date().toISOString()
  };
  
  const jsonContent = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonContent], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `mental-health-data-export-${new Date().toISOString().split('T')[0]}.json`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  showSuccessModal('📥 System data exported successfully!');
}

function exportSystemData() {
  exportAllData();
}

function showDataBackup() {
  showSuccessModal('💾 Data backup initiated. All user data and entries are being securely backed up to the cloud storage system.');
}

// Utility Functions
function rotateMotivationalQuote() {
  const quoteElement = document.getElementById('daily-quote');
  if (quoteElement) {
    const randomQuote = appData.motivationalQuotes[Math.floor(Math.random() * appData.motivationalQuotes.length)];
    quoteElement.textContent = `💡 ${randomQuote}`;
  }
}

function showSuccessModal(message, tip = null) {
  const messageEl = document.getElementById('success-message');
  const tipEl = document.getElementById('success-tip');
  
  if (messageEl) {
    messageEl.textContent = message;
  }
  
  if (tipEl) {
    if (tip) {
      tipEl.textContent = tip;
    } else {
      const randomTip = appData.motivationalQuotes[Math.floor(Math.random() * appData.motivationalQuotes.length)];
      tipEl.textContent = randomTip;
    }
  }
  
  const modal = document.getElementById('success-modal');
  if (modal) {
    modal.classList.remove('hidden');
  }
}

function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.classList.add('hidden');
  }
  
  // Stop breathing exercise if modal is closed
  if (modalId === 'breathing-modal') {
    stopBreathing();
  }
}

// Breathing Exercise Functions
let breathingPhase = 'ready';
let breathingCycle = 0;

function startBreathing() {
  const circle = document.getElementById('breathing-circle');
  const text = document.getElementById('breathing-text');
  const startBtn = document.getElementById('breathing-start');
  const stopBtn = document.getElementById('breathing-stop');
  
  breathingPhase = 'inhale';
  breathingCycle = 0;
  
  if (startBtn) startBtn.disabled = true;
  if (stopBtn) stopBtn.disabled = false;
  
  function breathingLoop() {
    if (breathingPhase === 'stopped') return;
    
    if (breathingPhase === 'inhale') {
      if (circle) {
        circle.classList.add('inhale');
        circle.classList.remove('exhale');
        circle.textContent = '🫁';
      }
      if (text) text.textContent = 'Breathe In...';
      
      setTimeout(() => {
        if (breathingPhase === 'stopped') return;
        breathingPhase = 'exhale';
        breathingLoop();
      }, 4000);
      
    } else if (breathingPhase === 'exhale') {
      if (circle) {
        circle.classList.add('exhale');
        circle.classList.remove('inhale');
        circle.textContent = '💨';
      }
      if (text) text.textContent = 'Breathe Out...';
      
      setTimeout(() => {
        if (breathingPhase === 'stopped') return;
        breathingCycle++;
        
        if (breathingCycle >= 6) { // 6 cycles = ~1 minute
          stopBreathing();
          closeModal('breathing-modal');
          showSuccessModal('🧘 Great job! You completed a breathing exercise. How do you feel?', 'Regular breathing exercises can reduce stress and improve focus throughout your day.');
          return;
        }
        
        breathingPhase = 'inhale';
        breathingLoop();
      }, 6000);
    }
  }
  
  breathingLoop();
}

function stopBreathing() {
  breathingPhase = 'stopped';
  
  const circle = document.getElementById('breathing-circle');
  const text = document.getElementById('breathing-text');
  const startBtn = document.getElementById('breathing-start');
  const stopBtn = document.getElementById('breathing-stop');
  
  if (circle) {
    circle.classList.remove('inhale', 'exhale');
    circle.textContent = '🧘';
  }
  if (text) {
    text.textContent = 'Click start to begin';
  }
  if (startBtn) {
    startBtn.disabled = false;
  }
  if (stopBtn) {
    stopBtn.disabled = true;
  }
}

// Initialize app when DOM is loaded
console.log('HR Mental Health Application Ready');
