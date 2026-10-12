// دالة فتح وإغلاق القائمة الجانبية للشري
function toggleSidebar() {
            const sidebar = document.getElementById('mySidebar');
            const overlay = document.getElementById('overlay');
            if (sidebar.style.width === '250px') {
                sidebar.style.width = '0';
                overlay.style.display = 'none';
            } else {
                sidebar.style.width = '250px';
                overlay.style.display = 'block';
            }
        }
