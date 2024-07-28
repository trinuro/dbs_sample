const rotatingCharacters = () =>{
    
    
}

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const h2headings = [...document.getElementsByTagName('h2')];
const seen = new Array(h2headings.length).fill(0);

var headingObserver = new IntersectionObserver((entry,currentEntry) => {
    const currentHeadingIndex = h2headings.indexOf(entry[0].target);
    const target = entry[0].target;
    console.log(currentHeadingIndex);
    if(seen[currentHeadingIndex]<1){
        let iterations = 0;
        const originalText = target.innerText;
        // console.log(originalText);
        
        const interval = setInterval((index)=>{
            target.innerText = target.innerText.split("") // split the letters
            .map((letter, index)=>{
                // console.log(iterations);
                if (index<=iterations){
                    // console.log(index+" "+iterations);
                    return originalText[index];
                }
                return letters[Math.floor(Math.random()*26)]

            }) // assign one random letter for each letter
            .join(""); // join them

            if(iterations >= originalText.length) clearInterval(interval); // stop after 10 times
            iterations += 1;

        }, 40); // run them for a certain time

        target.innerText = originalText;
        headingObserver.unobserve(target);
    }
    seen[currentHeadingIndex]++;

    // console.log(entry[0].target);
    // console.log(currentEntry);
    console.log('Element is fully visible in screen');
}, { threshold: [1] });

h2headings.map((header,index)=>{
    headingObserver.observe(header);
})

