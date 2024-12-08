const prisoners = [
    "أحمد محمد العلي", 
    "سامي حسين سعيد", 
    "محمد عبد الله", 
    "فاطمة محمود", 
    "علي حسن أحمد"
];

function searchName() {
    let searchQuery = document.getElementById('searchBox').value.toLowerCase();
    let results = prisoners.filter(name => name.toLowerCase().includes(searchQuery));

    if (results.length > 0) {
        document.getElementById('results').innerHTML = "<ul>" + results.map(result => `<li>${result}</li>`).join('') + "</ul>";
    } else {
        document.getElementById('results').innerHTML = "لا توجد تطابقات للبحث.";
    }
}
