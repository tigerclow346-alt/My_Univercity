// دالة فتح وإغلاق القائمة الجانبية للشريط
function toggleSidebar() {
    var sidebar = document.getElementById("sideDrawer");
    if (sidebar) {
        // إذا كان العرض الحالي غير مفرغ أو صفر، قم بفتحه، وإلا أغلقه
        if (sidebar.style.width === "280px") {
            sidebar.style.width = "0px";
        } else {
            sidebar.style.width = "280px";
        }
    }
}

