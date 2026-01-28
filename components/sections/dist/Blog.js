"use client";
"use strict";
exports.__esModule = true;
exports.Blog = void 0;
var react_1 = require("react");
var react_2 = require("motion/react");
var card_1 = require("@/components/ui/card");
var FadeInView_1 = require("@/components/animations/FadeInView");
var messages_1 = require("@/lib/messages");
// ブログエントリーデータ
var blogEntries = messages_1.messages.blog.recentEntries.map(function (entry, index) { return ({
    id: index + 1,
    date: entry.date,
    title: entry.title
}); });
// カードコンポーネントをメモ化（Vercel best practice: rerender-memo）
var BlogEntryCard = react_1.memo(function (_a) {
    var entry = _a.entry, index = _a.index;
    return (React.createElement(FadeInView_1.FadeInView, { direction: "up", delay: index * 0.1 },
        React.createElement(react_2.motion.div, { whileHover: { y: -4 }, transition: { type: "spring", stiffness: 300 } },
            React.createElement(card_1.Card, { className: "h-full" },
                React.createElement(card_1.CardHeader, null,
                    React.createElement(card_1.CardTitle, { className: "text-sm text-muted-foreground mb-2" }, entry.date),
                    React.createElement(card_1.CardTitle, { className: "text-xl" }, entry.title))))));
});
BlogEntryCard.displayName = "BlogEntryCard";
function Blog() {
    return (React.createElement("section", { className: "py-20 bg-background" },
        React.createElement("div", { className: "container mx-auto px-4 lg:px-8" },
            React.createElement(FadeInView_1.FadeInView, { direction: "up" },
                React.createElement("div", { className: "text-center mb-12" },
                    React.createElement("h2", { className: "text-4xl md:text-5xl font-bold mb-4" }, messages_1.messages.blog.title))),
            React.createElement("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8" }, blogEntries.map(function (entry, index) { return (React.createElement(BlogEntryCard, { key: entry.id, entry: entry, index: index })); })))));
}
exports.Blog = Blog;
