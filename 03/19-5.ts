interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void
}

class Handler {
    type: string

    onClickBad = (e: Event) => {
        this.type = e.type
    }
}

let h = new Handler()

let uiElement: UIElement = {
    addClickListener(){

    }
}

// 编译不通过
uiElement.addClickListener(h.onClickBad)
