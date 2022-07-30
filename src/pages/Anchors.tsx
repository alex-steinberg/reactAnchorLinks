import React, { useEffect } from "react"

export const Anchors = () => {
    useEffect(() => {
        
    })
    return (
        <>
            <h1>Page anchors in React</h1>
            <p>Click the links below to scroll to the relevant heading.</p>
            <a href="#heading1" className="d-block mb-1">Heading 1</a>
            <a href="#heading2" className="d-block mb-1">Heading 2</a>
            <a href="#heading3" className="d-block mb-1">Heading 3</a>  
            <main>
                <section className="wrapper">
                <p className="read-the-docs">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque repudiandae harum ut cumque ad quos, voluptatibus illum, eos id tenetur blanditiis molestias omnis. Omnis ratione culpa tenetur! Magnam, dicta natus.
                </p>
                <h2 id="heading1">Heading 1</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa a officiis eos alias dolor eligendi, nisi ex ducimus reprehenderit facilis nam dolore quos blanditiis qui porro. Ullam fugit quidem voluptatibus?</p>
                <h2 id="heading2">Heading 2</h2>
                <p>Earum consectetur, provident fuga at, alias sequi quod culpa cum debitis eligendi perspiciatis accusantium eum. Nihil ducimus iusto totam quis, aspernatur dolore harum alias eligendi optio ab cum, quaerat reiciendis.</p>
                <h2 id="heading3">Heading 3</h2>
                <p>Quos eius debitis sapiente numquam illo deserunt cumque vero expedita temporibus quaerat cum est sed eum perspiciatis error, soluta, voluptatibus reiciendis consectetur. Voluptatem, eum? Doloribus modi provident ad culpa quia.</p>
                </section>
            </main>
        </>
    )
}