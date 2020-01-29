interface UIElement {
    // 这儿要求this指向为void
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string

    // 这人this指向为Handler
    onClickBad(this: Handler, e: Event) {
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener(){

    }
}

// 所以编译不通过
uiElement.addClickListener(h.onClickBad)
