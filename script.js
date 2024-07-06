const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".volks", {
    ...scrollRevealOption,
    origin: "right",
});

ScrollReveal().reveal("nav", {
    ...scrollRevealOption,
    delay: 500,
    origin: "right",
});

ScrollReveal().reveal(".ppp", {
    ...scrollRevealOption,
    delay: 600,
})
ScrollReveal().reveal(".info", {
    ...scrollRevealOption,
    delay: 1000,
})
ScrollReveal().reveal(".star", {
    ...scrollRevealOption,
    delay: 500,
})
