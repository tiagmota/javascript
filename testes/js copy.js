for (i = 0; i < 3; i++) {
  for (j = 1; j < 3; j++) {
    if (i % j == 0) {
      continue;
    } else {
      console.log(`i = ${i}, j = ${j}`)
    }
  }
}