import { GithubUser } from "./GithubUser.js"

export class Favorites {
    constructor(root) {
        this.root = document.querySelector(root)
        this.load()

    }

    load() {
        this.entries = JSON.parse(localStorage.getItem("@github-favorites:")) || []

    }

    save() {
        localStorage.setItem("@github-favorites:", JSON.stringify(this.entries))
    }

    async add(username) {
        
        try {

            const userExists = this.entries.find( entry => entry.login === username)

            if(userExists) {
                throw new Error("usuario ja cadastrado")
            }

            const user = await GithubUser.search(username)
            if (user.login === undefined) {
                throw new Error("usuário n encontrado")
            }
            this.entries = [user, ...this.entries]
            this.update()
            this.save()
        } catch (error) {
            alert(error.message)
        }

    }

    delete(user) {
        const filteredEntries = this.entries.filter(entry =>
            entry.login !== user.login
        )

        this.entries = filteredEntries
        this.update()
        this.save()
    }

}

export class FavoritesView extends Favorites {
    constructor(root) {
        super(root)

        this.tbody = this.root.querySelector("table tbody")
        this.tfoot = this.root.querySelector("tfoot")


        this.update()
        this.onadd()

    }

    onadd() {
        const addButton = this.root.querySelector(".search button")
        addButton.onclick = () => {
            const {
                value
            } = this.root.querySelector(".search input")

            this.add(value)
        }
    }

    update() {
        this.removeAllTr()

        this.entries.forEach(user => {
            const row = this.createRow("tr")
            row.querySelector(".user img").alt = `imagem de ${user.name}`
            row.querySelector(".user img").src = `https://Github.com/${user.login}.png`
            row.querySelector(".user p").textContent = user.name
            row.querySelector(".user span").textContent = user.login
            row.querySelector(".repositories").textContent = user.public_repos
            row.querySelector(".followers").textContent = user.followers
            row.querySelector(".user a").href = `https://Github.com/${user.login}`


            row.querySelector(".remove").onclick = () => {
                const isOk = confirm("tem certeza que deseja deletar essa linha ??")
                if (isOk) {
                    this.delete(user)
                }

            }

            this.tbody.append(row)


        })



    }

    createRow() {

        const tr = document.createElement("tr")

        tr.innerHTML = `
                        <td class="user">
                            <img src="https://Github.com/maykbrito.png" alt="imagem do perfil github">
                            <a href="http://Github.com/maykbrito">
                                <p>Mayk Brito</p>
                                <span>/maykbrito</span>
                            </a>
                        </td>
                        <td class="repositories">100</td>
                        <td class="followers">200</td>
                        <td class="remove">remover</td>
    `
        return tr
    }

    removeAllTr() {

        this.tbody.querySelectorAll("tr")
            .forEach((tr) => {
                tr.remove()

            })

        if (this.entries.length > 0) {
            this.tfoot.classList.add("no-user")
        } else {
            this.tfoot.classList.remove("no-user")


        }


    }


}