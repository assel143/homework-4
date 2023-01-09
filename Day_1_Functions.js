function factorial(x) {
    if (x < 3) return x;
    return factorial(x-1) * x;
}