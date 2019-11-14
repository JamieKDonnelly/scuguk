import Anime from 'animejs';

const transitionLinkSettings = {
    exit: {
        length: 0.75,
        trigger: ({ exit, node }) =>{
            let loader = node.querySelector('.loader');
            loader.style.display = "block";
            Anime({
                targets: node.querySelector('.loader'),
                translateY: ["-100%", "0"],
                easing: 'easeInOutQuad',
                duration: 750
            });

            let h1 = node.querySelector('h1');            
        }
    },
    entry: {
        length: 0.75,
        delay: 0.75,
        trigger: ({ exit, node }) =>{
            let loader = node.querySelector('.loader');
            loader.style.display = "block";
            Anime({
                targets: node.querySelector('.loader'),
                translateY: ["0", "-100%"],
                easing: 'easeInOutQuad',
                duration: 750,
                complete: function(anim) {
                    loader.style.display = "none";
                }
            });

            let h1 = node.querySelector('h1');
        }
    }
}
  
export default transitionLinkSettings
  