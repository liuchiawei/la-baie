"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Hero_1 = require("@/components/sections/Hero");
var FeaturedDishes_1 = require("@/components/sections/FeaturedDishes");
var Features_1 = require("@/components/sections/Features");
var Scenes_1 = require("@/components/sections/Scenes");
var Blog_1 = require("@/components/sections/Blog");
var button_1 = require("@/components/ui/button");
var link_1 = require("next/link");
var FadeInView_1 = require("@/components/animations/FadeInView");
var messages_1 = require("@/lib/messages");
exports.metadata = {
    title: messages_1.messages.pages.home.title,
    description: messages_1.messages.pages.home.description
};
function Home() {
    return (React.createElement("main", { className: "min-h-screen" },
        React.createElement(Hero_1.Hero, null),
        React.createElement(FeaturedDishes_1.FeaturedDishes, null),
        React.createElement(Features_1.Features, null),
        React.createElement(Scenes_1.Scenes, null),
        React.createElement(Blog_1.Blog, null),
        React.createElement("section", { className: "py-20 bg-background" },
            React.createElement("div", { className: "container mx-auto px-4 lg:px-8" },
                React.createElement(FadeInView_1.FadeInView, { direction: "up" },
                    React.createElement("div", { className: "text-center max-w-2xl mx-auto" },
                        React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-6 whitespace-pre-line" }, messages_1.messages.pages.home.cta.title),
                        React.createElement("p", { className: "text-lg text-muted-foreground mb-8" }, messages_1.messages.pages.home.cta.description),
                        React.createElement("div", { className: "flex lg:flex-col gap-4 justify-center" },
                            React.createElement(button_1.Button, { asChild: true, size: "lg", className: "text-lg px-8" },
                                React.createElement(link_1["default"], { href: "/course" }, messages_1.messages.pages.home.cta.menuButton)),
                            React.createElement(button_1.Button, { asChild: true, size: "lg", variant: "outline", className: "text-lg px-8" },
                                React.createElement(link_1["default"], { href: "/about" }, messages_1.messages.pages.home.cta.aboutButton)))))))));
}
exports["default"] = Home;
