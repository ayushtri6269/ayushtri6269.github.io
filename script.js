document.addEventListener('DOMContentLoaded', () => {
    const alphabet = [
        { letter: 'A', word: 'Apple', image: 'apple.jpg' },
        { letter: 'B', word: 'Banana', image: 'Banana.webp' },
        { letter: 'C', word: 'Cat', image: 'Cat.jpeg' },
        { letter: 'D', word: 'Dog', image: 'Dog.jpeg' },
        { letter: 'E', word: 'Elephant', image: 'Elephant.jpeg' },
        { letter: 'F', word: 'Fish', image: 'Fish.jpeg' },
        { letter: 'G', word: 'Giraffe', image: 'Giraffe.jpeg' },
        { letter: 'H', word: 'Horse', image: 'Horse.jpeg' },
        { letter: 'I', word: 'Ice Cream', image: 'Icecream.jpeg' },
        { letter: 'J', word: 'Juice', image: 'Juice.jpeg' },
        { letter: 'K', word: 'Kite', image: 'Kite.jpeg' },
        { letter: 'L', word: 'Lion', image: 'Lion.jpeg' },
        { letter: 'M', word: 'Monkey', image: 'Monkey.jpeg' },
        { letter: 'N', word: 'Nest', image: 'Nest.jpeg' },
        { letter: 'O', word: 'Orange', image: 'Orange.jpeg' },
        { letter: 'P', word: 'Parrot', image: 'Parrot.jpeg' }, // New entry for Parrot
        { letter: 'Q', word: 'Queen', image: 'Queen.jpeg' },
        { letter: 'R', word: 'Rabbit', image: 'Rabbit.jpeg' },
        { letter: 'S', word: 'Sun', image: 'Sun.jpeg' },
        { letter: 'T', word: 'Tiger', image: 'Tiger.jpeg' },
        { letter: 'U', word: 'Umbrella', image: 'Umbrella.jpeg' },
        { letter: 'V', word: 'Violin', image: 'Violin.jpeg' },
        { letter: 'W', word: 'Whale', image: 'Whale.jpeg' },
        { letter: 'X', word: 'Xylophone', image: 'Xylophone.jpeg' },
        { letter: 'Y', word: 'Yacht', image: 'Yacht.jpeg' },
        { letter: 'Z', word: 'Zebra', image: 'Zebra.jpeg' }
    ];

    const alphabetGrid = document.querySelector('.alphabet-grid');

    alphabet.forEach(item => {
        const card = document.createElement('div');
        card.className = 'letter-card';
        
        const letter = document.createElement('div');
        letter.className = 'letter';
        letter.textContent = item.letter;
        
        const img = document.createElement('img');
        img.className = 'image';
        img.src = `images/${item.image}`;  // Reference to the image path
        img.alt = item.word;

        const word = document.createElement('div');
        word.className = 'word';
        word.textContent = item.word;

        const downloadLink = document.createElement('a');
        downloadLink.href = `images/${item.image}`;  // Reference to the image path
        downloadLink.download = item.image;
        downloadLink.textContent = 'Download Image';
        downloadLink.className = 'download-link';

        card.appendChild(letter);
        card.appendChild(img);
        card.appendChild(word);
        card.appendChild(downloadLink);
        alphabetGrid.appendChild(card);
    });
});
