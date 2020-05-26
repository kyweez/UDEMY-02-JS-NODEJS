function predictAge(inputAge){
    alert(`You will be ${inputAge + 1} years old soon`);
}

if (!confirm(`Do you want to continue ?`)){
    alert(`Too bad, it was funny !`);
}
else {
    predictAge(Number(prompt(`How old are you ?`)));
}

