"use client";
"use strict";
exports.__esModule = true;
exports.FeaturedDishes = void 0;
var image_1 = require("next/image");
var link_1 = require("next/link");
var react_1 = require("motion/react");
var card_1 = require("@/components/ui/card");
var button_1 = require("@/components/ui/button");
var FadeInView_1 = require("@/components/animations/FadeInView");
var messages_1 = require("@/lib/messages");
// 推薦料理データ
var featuredDishes = messages_1.messages.featuredDishes.items.map(function (item, index) { return ({
    id: index + 1,
    name: item.name,
    description: item.description,
    image: item.image,
    href: "/course"
}); });
// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
var DishCard = function (_a) {
    var dish = _a.dish, index = _a.index;
    return (React.createElement(FadeInView_1.FadeInView, { direction: "up", delay: index * 0.1 },
        React.createElement(react_1.motion.div, { whileHover: { y: -8 }, transition: { type: "spring", stiffness: 300 } },
            React.createElement(card_1.Card, { className: "overflow-hidden h-full" },
                React.createElement("div", { className: "relative h-64 w-full" },
                    React.createElement(image_1["default"], { src: dish.image, alt: dish.name, fill: true, className: "object-cover", loading: "lazy" })),
                React.createElement(card_1.CardHeader, null,
                    React.createElement(card_1.CardTitle, { className: "text-xl" }, dish.name),
                    React.createElement(card_1.CardDescription, { className: "text-base" }, dish.description)),
                React.createElement(card_1.CardFooter, null,
                    React.createElement(button_1.Button, { asChild: true, variant: "outline", className: "w-full" },
                        React.createElement(link_1["default"], { href: dish.href }, messages_1.messages.featuredDishes.viewDetails)))))));
};
function FeaturedDishes() {
    return (React.createElement("section", { className: "py-20 bg-background" },
        React.createElement("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8" },
            React.createElement(FadeInView_1.FadeInView, { direction: "up" },
                React.createElement("div", { className: "text-center mb-12" },
                    React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-4" }, messages_1.messages.featuredDishes.title),
                    React.createElement("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto" }, messages_1.messages.featuredDishes.subtitle))),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" }, featuredDishes.map(function (dish, index) { return (React.createElement(DishCard, { key: dish.id, dish: dish, index: index })); })))));
}
exports.FeaturedDishes = FeaturedDishes;
