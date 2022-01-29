// uses randomuser.me for images
let data = [
    {
        name: 'saqib',
        age: 19,
        city: 'Kahuta',
        language: 'python',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
        name: 'Ahmad',
        age: 15,
        city: 'Kahuta',
        language: 'python',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'Furqan',
        age: 16,
        city: 'Kahuta',
        language: 'Java',
        image: 'https://randomuser.me/api/portraits/men/77.jpg'
    },
    {
        name: 'Usman',
        age: 17,
        city: 'Kahuta',
        language: 'Django',
        image: 'https://randomuser.me/api/portraits/men/78.jpg'
    }
]
let cviterator = function (profiles) {
    let nextindex = 0;
    return {
        next: function () {
            if (nextindex < profiles.length) {
                return {
                    value: profiles[nextindex++],
                    done: false
                }
            }
            else {
                return {
                    done: true
                }
            }
        }
    }
}
let next = document.getElementById('next');
let candidates = cviterator(data);
next.addEventListener('click', nextCV)
function nextCV() {
    let currentcandidate = candidates.next().value;
    if(currentcandidate!=undefined){
        
        let image = document.getElementById('img');
        let profile = document.getElementById('profile');
        image.innerHTML = `<img src='${currentcandidate.image}'>`
        profile.innerHTML = `<ul class="list-group">
        <li class="list-group-item">Name: ${currentcandidate.name}</li>
        <li class="list-group-item">${currentcandidate.age} years old</li>
        <li class="list-group-item">lives in ${currentcandidate.city}</li>
        <li class="list-group-item">work on ${currentcandidate.language}</li>
        </ul>`
    }
    else{
        alert('End of Candidate List');
        window.location.reload();
    }

}
nextCV();

