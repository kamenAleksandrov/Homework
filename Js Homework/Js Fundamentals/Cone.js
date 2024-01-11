function coneVlumeAndArea(r,h) {
    let volume = (Math.PI * Math.pow(r,2) * h) / 3;
    console.log(`volume = ${volume.toFixed(4)}`);
    let area = Math.PI*r*(r+Math.sqrt(Math.pow(r,2)+Math.pow(h,2)));
    console.log(`area = ${area.toFixed(4)}`);
}

coneVlumeAndArea(3,5);