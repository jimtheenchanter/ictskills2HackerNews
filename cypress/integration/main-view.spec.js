describe("Main View ", () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it("Page renders with form and list of posts", () => {
        cy.get(".newsitem").should("have.length", 7);
        cy.get("form")
            .find("input")
            .should("have.length", 3);
    });
    describe("Upvoting", () => {
        it("increments the upvote count", () => {
            // Upvote the top/first news item twice, from 20 to 22
            cy.get("span.ptr")
                .first()
                .contains("20");
            cy.get("[data-icon=thumbs-up]")
                .first()
                .click();
            cy.get("span.ptr")
                .first()
                .contains("21");
            cy.get("[data-icon=thumbs-up]")
                .first()
                .click();
            cy.get("span.ptr")
                .first()
                .contains("22");
        });

        it("recomputes the order of the news items", () => {
            // Upvote the third (index 2) news item until it moves
            // to 2nd position
            cy.get("span.newsitem")
                .eq(2)
                .contains("Microsoft turned down");
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.ptr")
                .eq(2)
                .click();
            cy.get("span.newsitem")
                .eq(1)
                .contains("Microsoft turned down");
        });
    });


    describe.only("Add news item", () => {
        beforeEach(() => {
            cy.get("input[placeholder=Title]").type("Sample title");
            cy.get("input[placeholder=Author]").type("Sample author");
        });
        it("adds a new item with a link", () => {
            cy.get("input[placeholder=Link]").type("http://www.sample.com/");
            cy.get("button[type=submit]").click();
            cy.get("span.newsitem")
                .last()
                .contains("Sample title")
                .should("have.attr", "href")
                .and("include", "http://www.sample.com/");
        });
        it("adds a new item without a link", () => {
            cy.get("button[type=submit]").click();
            cy.get("span.newsitem")
                .last()
                .contains("Sample title")
                .should("not.have.attr", "href");
        });
    });
});