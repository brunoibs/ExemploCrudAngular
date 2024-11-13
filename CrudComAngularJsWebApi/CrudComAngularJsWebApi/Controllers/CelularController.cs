using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using CrudComAngularJsWebApi.Models;

namespace CrudComAngularJsWebApi.Controllers
{


    [RoutePrefix("api/v1/public")]
    public class CelularController : ApiController
    {

        private readonly  CelularDbContext _db = new CelularDbContext();



        [HttpGet]
        [Route("celulares")]
        public IQueryable<Celular> ObterCelulares()
        {
            return _db.Celulares;
        }


        [HttpGet]
        [Route("celular/{id:int}")]
        public HttpResponseMessage ObterPorId(int id)
        {
            if (id <= 0)
                return Request.CreateResponse(HttpStatusCode.BadRequest);
            Celular celular = _db.Celulares.Find(id);
            return Request.CreateResponse(HttpStatusCode.OK, celular);
        }



        [HttpPut]
        [Route("putcelular")]
        public HttpResponseMessage Alterar(Celular celular)
        {
            if (celular == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);


            _db.Entry(celular).State = EntityState.Modified;
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }


        [HttpPost]
        [Route("postcelular")]
        public HttpResponseMessage Incluir(Celular celular)
        {
            if (celular == null)
                return Request.CreateResponse(HttpStatusCode.BadRequest);


            _db.Celulares.Add(celular);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }


        [HttpDelete]
        [Route("deletecelular/{id:int}")]
        public HttpResponseMessage Excluir(int id)
        {
            if (id <= 0)
                return Request.CreateResponse(HttpStatusCode.BadRequest);


            Celular celular = _db.Celulares.Find(id);

            _db.Celulares.Remove(celular);
            _db.SaveChanges();

            return Request.CreateResponse(HttpStatusCode.OK);
        }






        //CRUD - CREATE - READ - UPDATE - DELETE



        protected override void Dispose(bool disponsing)
        {
            if (disponsing)
            {
                _db.Dispose();
            }

            base.Dispose(disponsing);
        }
    }
}
