let redirect = (screen) => {
    switch (screen) {
        case 'login':
            window.location.href = `auth-screens/login/login.html`
            break;
        case 'signup':
            window.location.href = `../signup/signup.html`
            break;
        case 'signupToLogin':
            window.location.href = `../login/login.html`
            break;
        case 'dashboard':
            window.location.href = `../../src/dashboard/dashboard.html`
            break;
        case 'addExpense':
            window.location.href = `dashboard-screens/addExpense.html`
            break;
        case 'allCategories':
            window.location.href = `dashboard-screens/allCategories.html`
            break;
        case 'addCategory':
            window.location.href = `addCategory.html`
            break;
        case 'generateReport':
            window.open(`dashboard-screens/generateReport.html`, `_blank`)
            break;
        case 'addExpenseToDashboard':
            window.location.href = `../dashboard.html`
            break;
        case 'allCategoriesToDashboard':
            window.location.href = `../dashboard.html`
            break;
        case 'addCategoryToAllCategory':
            window.location.href = `allCategories.html`
            break;
        case 'dashboradToLogin':
            window.location.href = `../../auth-screens/login/login.html`
            break;
        case 'addExpenseToLogin':
            window.location.href = `../../../auth-screens/login/login.html`
            break;
        case 'allCategoriesToLogin':
            window.location.href = `../../../auth-screens/login/login.html`
            break;
        case 'addCategoryToLogin':
            window.location.href = `../../../auth-screens/login/login.html`
            break;
        default:
            console.error('Redirect Error!')
    }
}

// Time & Date
let timeAndDate = () => {
    let dateNow = new Date().toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' });
    let timeNow = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    return `${dateNow} | ${timeNow}`
}

// Random Id Generate
let RandomId = () => {
    return Math.floor(Math.random() * 10000);
}


// Welcome name print Function
// Call the function and elemtn id in the argument
let WelcomeName = (element) => {
    let el = document.getElementById(element)
    let welcomeName = JSON.parse(localStorage.getItem('Current User'))
    return el.innerHTML = welcomeName.username;
}

// Log Out
let logOut = (num) => {
    localStorage.removeItem('Current User');
    // redirect('dashboradToLogin')
    switch (num) {
        case 1:
            redirect('dashboradToLogin')
            break;
        case 2:
            redirect('addExpenseToLogin')
            break;
        case 3:
            redirect('allCategoriesToLogin')
            break;
        case 4:
            redirect('addCategoryToLogin')
            break;
        default:
            console.error('Logout Redirect Error')

    }
}