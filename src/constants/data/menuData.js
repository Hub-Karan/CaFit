const getMenu = (title, imageUrl, screenName) => {
    return {
        title,
        imageUrl,
        screenName,
    };
};

// require("../../assets/menu/home.png")
const data = [
    getMenu("Home", require("../../assets/menu/home.png"), "Home"),
    getMenu("Weight", require("../../assets/menu/weight-scale.png"), "Weight"),
    getMenu(
        "Training Plan",
        require("../../assets/menu/list-2.png"),
        "TrainingPlan"
    ),
    getMenu(
        "Training Strat",
        require("../../assets/menu/chart-bars.png"),
        "TrainingStrat"
    ),
    getMenu("Meal Plan", require("../../assets/menu/cutlery.png"), "MealPlan"),
    getMenu(
        "Schedule",
        require("../../assets/menu/calendar-grid.png"),
        "Schedule"
    ),
    getMenu("Running", require("../../assets/menu/athletics.png"), "Running"),
    getMenu(
        "Excercise",
        require("../../assets/menu/stretching.png"),
        "Excercise"
    ),
    getMenu("Tips", require("../../assets/menu/bulb.png"), "Tips"),
    getMenu("Setting", require("../../assets/menu/gear.png"), "Setting"),
    getMenu("Support", require("../../assets/menu/alert-que.png"), "Support"),
    getMenu("Empty", require("../../assets/menu/alert-que.png"), "Empty"),
];

export default data;
