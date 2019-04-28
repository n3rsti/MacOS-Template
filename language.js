/*  language section

const language = '{"settings":{"language":{"pl":"Język","en":"Language"},"date":{"pl":"Data i czas","en":"Date & Time"},"wallpaper":{"pl":"Tapeta","en":"Wallpaper"}},"apps":{"notepad":{"pl":"Notatnik","en":"Notepad"},"settings":{"pl":"Ustawienia","en":"Settings"},"calculator":{"pl":"Kalkulator","en":"Calculator"}}}';
const parsed = JSON.parse(language);

 document.getElementById('json-settings').innerText = parsed.apps.settings.lang;
document.getElementById('json-language').innerText = parsed.settings.language.lang;
document.getElementById('json-date').innerText = parsed.settings.date.lang;
document.getElementById('json-wallpaper').innerText = parsed.settings.wallpaper.lang;
document.getElementById('json-notepad').innerText = parsed.apps.notepad.lang;
document.getElementById('json-calculator').innerText = parsed.apps.calculator.lang; 
const lang = [
    settings = "Settings", "Ustawienia",
    language = "Language", "Język"
]
console.log(lang[1][1])
 */
