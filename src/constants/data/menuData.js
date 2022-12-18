import React from 'react';

import MenuExcercise from '../../assets/icons/svg-menu/MenuExcercise';
import MenuHome from '../../assets/icons/svg-menu/MenuHome';
import MenuMealPlan from '../../assets/icons/svg-menu/MenuMealPlan';
import MenuRunning from '../../assets/icons/svg-menu/MenuRunning';
import MenuSchedule from '../../assets/icons/svg-menu/MenuSchedule';
import MenuSetting from '../../assets/icons/svg-menu/MenuSetting';
import MenuSupport from '../../assets/icons/svg-menu/MenuSupport';
import MenuTips from '../../assets/icons/svg-menu/MenuTips';
import MenuTrainingPlan from '../../assets/icons/svg-menu/MenuTrainingPlan';
import MenuTrainingStrat from '../../assets/icons/svg-menu/MenuTrainingStrat';
import MenuWeight from '../../assets/icons/svg-menu/MenuWeight';

const getMenu = (title, imageUrl, screenName) => {
    return {
        title,
        imageUrl,
        screenName,
    };
};

// require("../../assets/menu/home.png")
const data = [
    getMenu('Home', <MenuHome />, 'Home'),
    getMenu('Weight', <MenuWeight />, 'Weight'),
    getMenu('Training Plan', <MenuTrainingPlan />, 'TrainingPlan'),
    getMenu('Training Strat', <MenuTrainingStrat />, 'TrainingStrat'),
    getMenu('Meal Plan', <MenuMealPlan />, 'MealPlan'),
    getMenu('Schedule', <MenuSchedule />, 'Schedule'),
    getMenu('Running', <MenuRunning />, 'Running'),
    getMenu('Excercise', <MenuExcercise />, 'Excercise'),
    getMenu('Tips', <MenuTips />, 'Tips'),
    getMenu('Setting', <MenuSetting />, 'Setting'),
    getMenu('Support', <MenuSupport />, 'Support'),
    getMenu('Empty', <MenuHome />, 'Empty'),
];

export default data;
