(function () {
    // 1. පිටුව පූරණය වීමට පෙර ආරක්ෂාව තහවුරු කරයි
    const path = window.location.pathname.toLowerCase();
    const isAuthPage = path.includes('login.html') || path.includes('signup.html') || path.includes('staff-login.html');
    const currentUser = localStorage.getItem('currentUser');

    // 2. Login වී නැතිනම් සැනින් Screen එක සඟවා Login පිටුවට යොමු කරයි
    if (!currentUser && !isAuthPage) {
        document.documentElement.style.display = 'none';
        window.location.href = 'login.html';
        return;
    }

    // 3. දැනටමත් Login වී ඇත්නම් නැවත Login පිටුවට යාමට නොදෙයි
    if (currentUser && isAuthPage) {
        const role = localStorage.getItem('userRole');
        if (role === 'admin' || role === 'manager') {
            window.location.href = 'admin-dashboard.html';
        } else if (role === 'inventory') {
            window.location.href = 'inventory-dashboard.html';
        } else if (role === 'delivery') {
            window.location.href = 'delivery-dashboard.html';
        } else if (role === 'support') {
            window.location.href = 'support-dashboard.html';
        } else {
            window.location.href = 'index.html';
        }
    }
})();
