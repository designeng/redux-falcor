import Router from 'falcor-router';
import { Model } from 'falcor';

let $atom = Model.atom;

const images = [
    "https://img.drive.ru/i/3/5660465595a656be0900002a.jpg",
    "https://img.drive.ru/i/3/56727c8a95a656481100001a.jpg",
    "https://img.drive.ru/i/3/5672839695a65648110000bf.jpg",
    "https://img.drive.ru/i/3/5672628a95a65615cd000035.jpg",
    "https://img.drive.ru/i/3/566a8f1c95a656b2290000a4.jpg",
]

const captions = [
    "Ищем доброту внутри водородомобиля Toyota Mirai",
    "Компания Opel покажет в Женеве наследника исторической модели GT",
    "В Москве будет введён запрет на топливо ниже Евро-5",
    "Концептом h-tron quattro Audi намекнёт на вариант кроссовера Q6",
    "Зовём Cayenne рассудить BMW X5 M и Range Rover Sport SVR"
]

const top = (function (images, captions) {
    return images.map((img, index) => {
        var caption = captions[index];
        return {img: img, caption: caption};
    });
})(images, captions)

const NewsRouter = Router.createClass([
    {
        route: "top",
        get: function() {
            return {path:["top"], value: $atom(top)};
        }
    }
]);

export default NewsRouter;