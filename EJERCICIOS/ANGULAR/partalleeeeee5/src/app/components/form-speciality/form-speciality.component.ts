import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Speciality} from '../../models/speciality';
import {ActivatedRoute, Router} from '@angular/router';
import {SpecialitiesService} from '../../services/specialities.service';

@Component({
  selector: 'app-form-speciality',
  templateUrl: './form-speciality.component.html',
  styleUrls: ['./form-speciality.component.css']
})
export class FormSpecialityComponent implements OnInit {

  private speciality: Speciality;
  private textoBoton: string;
  @Output() actualiza = new EventEmitter<Speciality>();

  constructor(private specialitiesService: SpecialitiesService, private route: ActivatedRoute, private router: Router) {
    this.speciality = new Speciality();
    this.textoBoton = 'Añadir boton';
  }

  ngOnInit() {

  }

  onSubmit(speciality: Speciality) {
    if (speciality.id) {
      console.log('actualizacion');
    } else {
      speciality.id = null;
      this.specialitiesService.insertarSpecialities(speciality).subscribe(datos => {
        console.log(datos);
        this.speciality = datos;
        this.actualiza.emit(this.speciality);
      });
    }
  }
}
