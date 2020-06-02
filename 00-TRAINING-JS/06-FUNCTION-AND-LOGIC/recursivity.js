function timer(secondes) {

    if (secondes > 0) {
        console.log(secondes);
        timer(secondes - 1);
    }
    else {
        console.log(0);
    }
}

timer(10);