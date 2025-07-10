import { Injectable } from "@angular/core";
import { delay, Observable, of } from "rxjs";
import { ContactRequest, ContactResponse } from "../interfaces";


@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  constructor() { }

  public sendMessage(payload: ContactRequest): Observable<ContactResponse> {
    console.log("xxx");
    return of({
      message: "¡Gracias por contactarnos! Te responderemos pronto."
    }).pipe(
      delay(2000)
    )
  }

}
