function twoCriteriaOrdering(arr) {
    arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(arr.join('\n'));
}

twoCriteriaOrdering(['alpha', 'beta', 'gamma']); // beta, alpha, gamma