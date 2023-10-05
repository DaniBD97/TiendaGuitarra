var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.jsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_node_stream = require("node:stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext, loadContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 47,
          columnNumber: 7
        },
        this
      ),
      {
        onAllReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(
        import_react.RemixServer,
        {
          context: remixContext,
          url: request.url,
          abortDelay: ABORT_DELAY
        },
        void 0,
        !1,
        {
          fileName: "app/entry.server.jsx",
          lineNumber: 97,
          columnNumber: 7
        },
        this
      ),
      {
        onShellReady() {
          shellRendered = !0;
          let body = new import_node_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500, shellRendered && console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.jsx
var root_exports = {};
__export(root_exports, {
  ErrorBoundary: () => ErrorBoundary,
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react6 = require("@remix-run/react");

// app/styles/index.css
var styles_default = "/build/_assets/index-6O442TIE.css";

// app/components/header.jsx
var import_react2 = require("react"), import_react3 = require("@remix-run/react");

// public/img/logo.svg
var logo_default = "/build/_assets/logo-YZ2KDQEU.svg";

// app/components/header.jsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
function Header() {
  let location = (0, import_react3.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("header", { className: "header", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("div", { className: "contenedor barra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("img", { className: "logo", src: logo_default, alt: "Logo" }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 16,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/header.jsx",
      lineNumber: 15,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("nav", { className: "navegacion", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react3.Link,
        {
          to: "/",
          className: location.pathname === "/" ? "active" : "",
          children: "Inicio"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 20,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react3.Link,
        {
          to: "/nosotros",
          className: location.pathname === "/nosotros" ? "active" : "",
          children: "Nosotros"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 25,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react3.Link,
        {
          to: "/blog",
          className: location.pathname === "/blog" ? "active" : "",
          children: "Blog"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 30,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
        import_react3.Link,
        {
          to: "/tienda",
          className: location.pathname === "/tienda" ? "active" : "",
          children: "Tienda"
        },
        void 0,
        !1,
        {
          fileName: "app/components/header.jsx",
          lineNumber: 35,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/header.jsx",
      lineNumber: 19,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/header.jsx",
    lineNumber: 14,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/header.jsx",
    lineNumber: 13,
    columnNumber: 5
  }, this);
}
var header_default = Header;

// app/components/footer.jsx
var import_react4 = require("react"), import_react5 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime");
function Footer() {
  let location = (0, import_react5.useLocation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "contenedor contenido", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("nav", { className: "navegacion", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react5.Link,
        {
          to: "/",
          className: location.pathname === "/" ? "active" : "",
          children: "Inicio"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.jsx",
          lineNumber: 12,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react5.Link,
        {
          to: "/nosotros",
          className: location.pathname === "/nosotros" ? "active" : "",
          children: "Nosotros"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.jsx",
          lineNumber: 17,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react5.Link,
        {
          to: "/blog",
          className: location.pathname === "/blog" ? "active" : "",
          children: "Blog"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.jsx",
          lineNumber: 22,
          columnNumber: 21
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_react5.Link,
        {
          to: "/tienda",
          className: location.pathname === "/tienda" ? "active" : "",
          children: "Tienda"
        },
        void 0,
        !1,
        {
          fileName: "app/components/footer.jsx",
          lineNumber: 27,
          columnNumber: 21
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 11,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("p", { className: "copyright", children: [
      "Todos los Derechos Reservados ",
      (/* @__PURE__ */ new Date()).getFullYear()
    ] }, void 0, !0, {
      fileName: "app/components/footer.jsx",
      lineNumber: 34,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/footer.jsx",
    lineNumber: 9,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/components/footer.jsx",
    lineNumber: 8,
    columnNumber: 9
  }, this);
}
var footer_default = Footer;

// app/root.jsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
function meta() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA" },
    { viewport: "width=device-width, initial-scale=1" }
  ];
}
function links() {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Outlet, {}, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 47,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/root.jsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}
function Document({ children }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Meta, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 59,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Links, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 60,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 58,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(header_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 63,
        columnNumber: 9
      }, this),
      children,
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(footer_default, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 65,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Scripts, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 66,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.LiveReload, {}, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 67,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 62,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.jsx",
    lineNumber: 56,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  let error = (0, import_react6.useRouteError)();
  if ((0, import_react6.isRouteErrorResponse)(error))
    return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Document, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("p", { className: "error", children: [
        error.status,
        error.statusText
      ] }, void 0, !0, {
        fileName: "app/root.jsx",
        lineNumber: 82,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react6.Link, { className: "error-enlace", to: "/", children: "Talvez quieras volver a la pagina principal" }, void 0, !1, {
        fileName: "app/root.jsx",
        lineNumber: 83,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.jsx",
      lineNumber: 81,
      columnNumber: 7
    }, this);
}

// app/routes/guitarras.$url.jsx
var guitarras_url_exports = {};
__export(guitarras_url_exports, {
  default: () => guitarras_url_default,
  links: () => links2,
  loader: () => loader,
  meta: () => meta2
});
var import_react7 = require("react");

// app/models/guitarras.server.js
async function getGuitarras() {
  return await (await fetch(`${process.env.API_URL}/guitarras?populate=imagen`)).json();
}
async function getGuitarra(url) {
  return await (await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/guitarras.$url.jsx
var import_react8 = require("@remix-run/react");

// app/styles/guitarras.css
var guitarras_default = "/build/_assets/guitarras-376YZ3NK.css";

// app/routes/guitarras.$url.jsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime");
function links2() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
async function loader({ params }) {
  let { url } = params, guitarra = await getGuitarra(url);
  if (guitarra.data.length === 0)
    throw new Response("", {
      status: 404,
      statusText: "Guitarra no Encontrada"
    });
  return guitarra;
}
function meta2({ data }) {
  return data ? [
    { charset: "utf-8" },
    { title: `GuitarLA - ${data.data[0].attributes.nombre}` },
    { description: `Guitarras, Venta de guitarra, Guitarra ${data.data[0].attributes.nombre}` }
  ] : {
    title: "Guitarra no Encontrada",
    descripcion: `Guitarras, Venta de guitarra, Guitarra ${data.data[0].attributes.nombre}`
  };
}
function Guitarra() {
  let guitarra = (0, import_react8.useLoaderData)(), { nombre, descripcion, imagen, precio } = guitarra.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contenedor guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.url, alt: `Imagen de la guitarra ${nombre}` }, void 0, !1, {
      fileName: "app/routes/guitarras.$url.jsx",
      lineNumber: 68,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("h1", { className: "titulo", children: [
        " ",
        nombre
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras.$url.jsx",
        lineNumber: 71,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "texto", children: descripcion }, void 0, !1, {
        fileName: "app/routes/guitarras.$url.jsx",
        lineNumber: 72,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/routes/guitarras.$url.jsx",
        lineNumber: 73,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/guitarras.$url.jsx",
      lineNumber: 70,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/guitarras.$url.jsx",
    lineNumber: 67,
    columnNumber: 5
  }, this);
}
var guitarras_url_default = Guitarra;

// app/routes/posts.$url.jsx
var posts_url_exports = {};
__export(posts_url_exports, {
  default: () => posts_url_default,
  links: () => links3,
  loader: () => loader2
});
var import_react9 = require("react");

// app/models/posts.server.js
async function getPosts() {
  return await (await fetch(`${process.env.API_URL}/posts?populate=imagen`)).json();
}
async function getPost(url) {
  return await (await fetch(`${process.env.API_URL}/posts?filters[url]=${url}&populate=imagen`)).json();
}

// app/routes/posts.$url.jsx
var import_react10 = require("@remix-run/react");

// app/utils/helpers.js
var formatearFecha = (fecha) => {
  let fechaNueva = new Date(fecha), opciones = {
    year: "numeric",
    month: "long",
    day: "2-digit"
  };
  return fechaNueva.toLocaleDateString("es-ES", opciones);
};

// app/styles/blog.css
var blog_default = "/build/_assets/blog-QXHVHKIO.css";

// app/routes/posts.$url.jsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime");
function links3() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader2({ params }) {
  let { url } = params;
  return await getPost(url);
}
function Post() {
  let post = (0, import_react10.useLoaderData)(), { contenido, imagen, titulo, publishedAt } = post.data[0].attributes;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenedor post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("img", { className: "imagen-url", src: imagen.data.attributes.formats.medium.url, alt: `Imagen de la guitarra ${titulo}` }, void 0, !1, {
      fileName: "app/routes/posts.$url.jsx",
      lineNumber: 42,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "titulo", children: [
        " ",
        titulo
      ] }, void 0, !0, {
        fileName: "app/routes/posts.$url.jsx",
        lineNumber: 45,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/routes/posts.$url.jsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { className: "resumen-url", children: contenido }, void 0, !1, {
        fileName: "app/routes/posts.$url.jsx",
        lineNumber: 47,
        columnNumber: 17
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/posts.$url.jsx",
      lineNumber: 44,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/posts.$url.jsx",
    lineNumber: 41,
    columnNumber: 5
  }, this);
}
var posts_url_default = Post;

// app/routes/nosotros.jsx
var nosotros_exports = {};
__export(nosotros_exports, {
  default: () => nosotros_default2,
  links: () => links4,
  meta: () => meta3
});
var import_react11 = require("@remix-run/react"), import_react12 = require("react");

// public/img/nosotros.jpg
var nosotros_default = "/build/_assets/nosotros-55PFFMUZ.jpg";

// app/routes/nosotros.jsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime");
function meta3() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Nosotros" },
    { viewport: "width=device-width, initial-scale=1" }
  ];
}
function links4() {
  return [
    {
      rel: "stylesheet",
      href: styles_default
    }
  ];
}
function Nosotros() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("main", { className: "contenedor nosotros", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h2", { className: "heading", children: "Nosotros" }, void 0, !1, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 32,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("img", { src: nosotros_default, alt: "Imagen" }, void 0, !1, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 35,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "Parrafos", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione totam? Distinctio ea quae harum error in magni doloribus placeat minus iusto, tempore dolore doloremque obcaecati tenetur, dignissimos vitae eum." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 38,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, ratione totam? Distinctio ea quae harum error in magni doloribus placeat minus iusto, tempore dolore doloremque obcaecati tenetur, dignissimos vitae eum." }, void 0, !1, {
          fileName: "app/routes/nosotros.jsx",
          lineNumber: 42,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/nosotros.jsx",
        lineNumber: 37,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/nosotros.jsx",
      lineNumber: 34,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/nosotros.jsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}
var nosotros_default2 = Nosotros;

// app/routes/tienda.jsx
var tienda_exports = {};
__export(tienda_exports, {
  default: () => tienda_default,
  links: () => links5,
  loader: () => loader3,
  meta: () => meta4
});
var import_react15 = require("react");
var import_react16 = require("@remix-run/react");

// app/components/guitarra.jsx
var import_react13 = require("react"), import_react14 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function Guitarra2({ guitarra }) {
  let { descripcion, imagen, nombre, precio, url } = guitarra;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "guitarra", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("img", { src: imagen.data.attributes.formats.medium.url, alt: `Imagen guitrra ${nombre}` }, void 0, !1, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 12,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h3", { children: nombre }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "descripcion", children: descripcion }, void 0, !1, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 15,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { className: "precio", children: [
        "$",
        precio
      ] }, void 0, !0, {
        fileName: "app/components/guitarra.jsx",
        lineNumber: 16,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
        import_react14.Link,
        {
          className: "enlace",
          to: `/guitarras/${url}`,
          children: "Ver Producto"
        },
        void 0,
        !1,
        {
          fileName: "app/components/guitarra.jsx",
          lineNumber: 17,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/guitarra.jsx",
      lineNumber: 13,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/guitarra.jsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

// app/routes/tienda.jsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function meta4() {
  return [
    { charset: "utf-8" },
    { title: "GuitarLA - Tienda" },
    { viewport: "width=device-width, initial-scale=1" }
  ];
}
function links5() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    }
  ];
}
async function loader3() {
  return (await getGuitarras()).data;
}
function Tienda() {
  let guitarras = (0, import_react16.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h2", { className: "heading", children: "Coleccion" }, void 0, !1, {
      fileName: "app/routes/tienda.jsx",
      lineNumber: 52,
      columnNumber: 7
    }, this),
    (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map(
      (guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(
        Guitarra2,
        {
          guitarra: guitarra == null ? void 0 : guitarra.attributes
        },
        guitarra == null ? void 0 : guitarra.id,
        !1,
        {
          fileName: "app/routes/tienda.jsx",
          lineNumber: 57,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/tienda.jsx",
      lineNumber: 55,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/tienda.jsx",
    lineNumber: 51,
    columnNumber: 5
  }, this);
}
var tienda_default = Tienda;

// app/routes/_index.jsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default,
  links: () => links6,
  loader: () => loader4,
  meta: () => meta5
});
var import_react21 = require("react");
var import_react22 = require("@remix-run/react");

// app/components/listado-guitarra.jsx
var import_react17 = require("react");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function ListadoGuitarras({ guitarras }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: (guitarras == null ? void 0 : guitarras.length) && /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { className: "guitarras-grid", children: guitarras.map((guitarra) => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    Guitarra2,
    {
      guitarra: guitarra == null ? void 0 : guitarra.attributes
    },
    guitarra == null ? void 0 : guitarra.id,
    !1,
    {
      fileName: "app/components/listado-guitarra.jsx",
      lineNumber: 11,
      columnNumber: 25
    },
    this
  )) }, void 0, !1, {
    fileName: "app/components/listado-guitarra.jsx",
    lineNumber: 9,
    columnNumber: 17
  }, this) }, void 0, !1, {
    fileName: "app/components/listado-guitarra.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/components/listado-posts.jsx
var import_react20 = require("react");

// app/components/post.jsx
var import_react18 = require("react"), import_react19 = require("@remix-run/react");
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function Post2({ post }) {
  let { contenido, imagen, titulo, url, publishedAt } = post;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("article", { className: "post", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("img", { className: "imagen", src: imagen.data.attributes.formats.small.url }, void 0, !1, {
      fileName: "app/components/post.jsx",
      lineNumber: 10,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "contenido", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h3", { className: "titulo", children: titulo }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 12,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "fecha", children: formatearFecha(publishedAt) }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 13,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "resumen", children: contenido }, void 0, !1, {
        fileName: "app/components/post.jsx",
        lineNumber: 14,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
        import_react19.Link,
        {
          className: "enlace",
          to: `/posts/${url}`,
          children: "Ver Blog"
        },
        void 0,
        !1,
        {
          fileName: "app/components/post.jsx",
          lineNumber: 15,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/post.jsx",
      lineNumber: 11,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/post.jsx",
    lineNumber: 9,
    columnNumber: 5
  }, this);
}
var post_default = Post2;

// app/components/listado-posts.jsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function ListadoPost({ posts }) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 8,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "blog", children: posts.map((post) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
      post_default,
      {
        post: post.attributes
      },
      post.id,
      !1,
      {
        fileName: "app/components/listado-posts.jsx",
        lineNumber: 11,
        columnNumber: 21
      },
      this
    )) }, void 0, !1, {
      fileName: "app/components/listado-posts.jsx",
      lineNumber: 9,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/listado-posts.jsx",
    lineNumber: 7,
    columnNumber: 9
  }, this);
}

// app/routes/_index.jsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function meta5() {
}
function links6() {
  return [
    {
      rel: "stylesheet",
      href: guitarras_default
    },
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader4() {
  let [guitarras, posts] = await Promise.all(
    [
      getGuitarras(),
      getPosts()
    ]
  );
  return console.log(guitarras), console.log(posts), {
    guitarras: guitarras.data,
    posts: posts.data
  };
}
function Index() {
  let { guitarras, posts } = (0, import_react22.useLoaderData)();
  return console.log(guitarras), console.log(posts), /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_jsx_dev_runtime13.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("main", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      ListadoGuitarras,
      {
        guitarras
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 62,
        columnNumber: 8
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 61,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("section", { className: "contenedor", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
      ListadoPost,
      {
        posts
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_index.jsx",
        lineNumber: 72,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/_index.jsx",
      lineNumber: 71,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.jsx",
    lineNumber: 60,
    columnNumber: 5
  }, this);
}
var index_default = Index;

// app/routes/blog.jsx
var blog_exports = {};
__export(blog_exports, {
  default: () => blog_default2,
  links: () => links7,
  loader: () => loader5
});
var import_react23 = require("react");
var import_react24 = require("@remix-run/react");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function links7() {
  return [
    {
      rel: "stylesheet",
      href: blog_default
    }
  ];
}
async function loader5() {
  return (await getPosts()).data;
}
function Blog() {
  let posts = (0, import_react24.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("main", { className: "contenedor", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "heading", children: "Blog" }, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 43,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "blog", children: posts.map(
      (post) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        post_default,
        {
          post: post.attributes
        },
        post.id,
        !1,
        {
          fileName: "app/routes/blog.jsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      )
    ) }, void 0, !1, {
      fileName: "app/routes/blog.jsx",
      lineNumber: 44,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/blog.jsx",
    lineNumber: 42,
    columnNumber: 5
  }, this);
}
var blog_default2 = Blog;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-HICHUEOV.js", imports: ["/build/_shared/chunk-ZWGWGGVF.js", "/build/_shared/chunk-GIAAE3CH.js", "/build/_shared/chunk-XFY52H5U.js", "/build/_shared/chunk-YEQIXZ7O.js", "/build/_shared/chunk-UWV35TSL.js", "/build/_shared/chunk-XU7DNSPJ.js", "/build/_shared/chunk-BOXFZXVX.js", "/build/_shared/chunk-PNG5AS42.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-NA2BX3WQ.js", imports: ["/build/_shared/chunk-6XUQ2UXG.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-FURKQXFH.js", imports: ["/build/_shared/chunk-UR2CEEQK.js", "/build/_shared/chunk-QMNACDLN.js", "/build/_shared/chunk-HGBRUTE3.js", "/build/_shared/chunk-C3ZM5HWX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/blog": { id: "routes/blog", parentId: "root", path: "blog", index: void 0, caseSensitive: void 0, module: "/build/routes/blog-IZATBQ3O.js", imports: ["/build/_shared/chunk-HGBRUTE3.js", "/build/_shared/chunk-C3ZM5HWX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/guitarras.$url": { id: "routes/guitarras.$url", parentId: "root", path: "guitarras/:url", index: void 0, caseSensitive: void 0, module: "/build/routes/guitarras.$url-TM4CKHVK.js", imports: ["/build/_shared/chunk-2PLMSAU3.js", "/build/_shared/chunk-QMNACDLN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/nosotros": { id: "routes/nosotros", parentId: "root", path: "nosotros", index: void 0, caseSensitive: void 0, module: "/build/routes/nosotros-YPCZEEGG.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/posts.$url": { id: "routes/posts.$url", parentId: "root", path: "posts/:url", index: void 0, caseSensitive: void 0, module: "/build/routes/posts.$url-KVNCR62C.js", imports: ["/build/_shared/chunk-C3ZM5HWX.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/tienda": { id: "routes/tienda", parentId: "root", path: "tienda", index: void 0, caseSensitive: void 0, module: "/build/routes/tienda-VJI4O6T3.js", imports: ["/build/_shared/chunk-2PLMSAU3.js", "/build/_shared/chunk-UR2CEEQK.js", "/build/_shared/chunk-QMNACDLN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, version: "b23bad7e", hmr: { runtime: "/build/_shared\\chunk-YEQIXZ7O.js", timestamp: 1693591650069 }, url: "/build/manifest-B23BAD7E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_dev: !0, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_headers: !0, v2_meta: !0, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/guitarras.$url": {
    id: "routes/guitarras.$url",
    parentId: "root",
    path: "guitarras/:url",
    index: void 0,
    caseSensitive: void 0,
    module: guitarras_url_exports
  },
  "routes/posts.$url": {
    id: "routes/posts.$url",
    parentId: "root",
    path: "posts/:url",
    index: void 0,
    caseSensitive: void 0,
    module: posts_url_exports
  },
  "routes/nosotros": {
    id: "routes/nosotros",
    parentId: "root",
    path: "nosotros",
    index: void 0,
    caseSensitive: void 0,
    module: nosotros_exports
  },
  "routes/tienda": {
    id: "routes/tienda",
    parentId: "root",
    path: "tienda",
    index: void 0,
    caseSensitive: void 0,
    module: tienda_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/blog": {
    id: "routes/blog",
    parentId: "root",
    path: "blog",
    index: void 0,
    caseSensitive: void 0,
    module: blog_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
