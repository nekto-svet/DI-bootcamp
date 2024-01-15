//FORMS
// const forms = document.forms;
// console.log(forms)

// forms.element = forms.children

// u can get form by [position] or by name

// forms.children.age.value = input

// forms.children.age.form -- backreferense, back to form

// if radio with 2 buttons:
// form.elements.name_of_radio - both
// form.children.name_of_radio - just first


//text area
// forms.children.name_of_TA.value = input

//select
// select.options - all
// select.value - first
// select.selectedIndex - selected


//exercise
// Get the value of the 2nd Option
// Add a new option with the value 'Work' at the end of the select form
// Add a new option with the value 'Primary School' at the beginning of the select form
// Change 'College' as selected. Use the 3 properties we learned above
// Add a button that alert the choice selected

let drop = document.getElementById('school-type');
let value2 = drop.options[1].value
console.log(drop)
console.log(value2)


option = new Option('Work', 'Work');
drop.appendChild(option)

option = new Option('Primary School', 'Primary School');
drop.insertBefore(option, drop.firstChild)

drop.options[3].selected = true;