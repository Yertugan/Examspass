import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {ImageService} from "../shared/services/course-services/image.service";
import {Course} from "../shared/models/course";
import {CourseService} from "../shared/services/course-services/course.service";

class ImageSnippet {
  constructor(
    public src: string,
    public file: File,
    public imgResult: any) {
  }
}

@Component({
  selector: 'app-createcourse',
  templateUrl: './createcourse.component.html',
  styleUrls: ['./createcourse.component.css']
})
export class CreatecourseComponent implements OnInit {

  @ViewChild('img') img: ElementRef;

  formGroup = new FormGroup({
    name: new FormControl(''),
    about: new FormControl(''),
    organization: new FormControl(''),
    exam: new FormControl(''),
    price: new FormControl(0),
    teacher: new FormControl(''),
    numberOfLessons: new FormControl(0),
  });

  selectedFile: ImageSnippet;

  // constructor(private imageService: ImageService){}

  processFile(imageInput: any) {
    const file: File = imageInput.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', (event: any) => {
      this.selectedFile = new ImageSnippet(event.target.result, file, reader.result);
      console.log(this.img);
    });

    reader.readAsDataURL(file);
  }

  formSubmit() {
    console.log(this.formGroup.value);
    const course: Course = this.formGroup.value;

    this.courseService.createCourse(course).then(course => {
      this.imageService.updateCourseImage(this.selectedFile.file, course.id).toPromise()
        .then(response => {
          console.log(response);
        })
        .catch(console.error);
    });

    console.log(course);
  }

  constructor(private courseService: CourseService, private imageService: ImageService) {
  }

  ngOnInit(): void {
  }

}
