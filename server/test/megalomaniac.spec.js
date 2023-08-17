const request = require("supertest");
const server = require("../app");

describe("Validaciones Sitio Megalomaniac", () => {

    test('Obtener todos los POSTS', async () => {
        const response =  await request(server).get('/posts').send()
         expect(response.status).toBe(200)
    })

    test('Obtener todos los Favoritos', async () => {
        const response =  await request(server).get('/favoritos').send()
         expect(response.status).toBe(200)
    })

    test('Obtener todos los Usuarios', async () => {
        const response =  await request(server).get('/Usuarios').send()
         expect(response.status).toBe(200)
    })

    it('Editando un Posts que No existe', async () => {
        const id = "este id no existe";
        const producto = { id, nombre: "Nuevo producto" };
        const {statusCode} = await request(server)
            .put("/posts/")
            .send(producto);
        expect(statusCode).toBe(404)
    })

    it("Eliminando un Post", async () => {
        const idDeProductoAEliminar = 1;
        const  posts = await request(server)
          .delete(`/posts/${idDeProductoAEliminar}`).send();
      });

      it("Eliminando un Favorito", async () => {
        const idDeProductoAEliminar = 1;
        const favoritos = await request(server)
          .delete(`/favoritos/${idDeProductoAEliminar}`).send();
      });

});