function totalVolume(...boxes) {
	var sum=0;
	for (i=0; i<boxes.length; i++) {
		sum+=boxes[i][0] * boxes[i][1] * boxes[i][2];
	}
	return sum;
}