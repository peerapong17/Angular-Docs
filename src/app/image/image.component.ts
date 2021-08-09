import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

interface Response {
  data: DataResponse[]
}

interface DataResponse {
  id:string
  imagePath:string
}

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css'],
})
export class ImageComponent implements OnInit {
  imgPreview: string = '';
  dataList: DataResponse[] = []

  uploadForm = new FormGroup({
    img: new FormControl('', [Validators.required]),
  });

  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.httpClient.get<Response>("http://localhost:3000/")
    .subscribe((res)=>{
      console.log(res)
      this.dataList = res.data
    })
  }

  get imgFile() {
    return this.uploadForm.controls.img;
  }

  onImageChange(e: Event) {
    const reader = new FileReader();
    const input = e.target as HTMLInputElement;
    const allowedType = ['image/png', 'image/jpeg', 'image/jpg'];
    if (input.files && allowedType.includes(input.files[0].type)) {
      reader.onload = () => {
        this.imgPreview = reader.result as string;
        this.uploadForm.patchValue({
          img: input.files![0],
        });
      };
      reader.readAsDataURL(input.files[0]);
    } else {
      alert('File is not correct');
    }
  }

  upload() {
    if (this.uploadForm.valid) {
      const data = new FormData();

      data.append('image', this.imgFile.value);

      this.httpClient.post('http://localhost:3000/', data, {}).subscribe(
        (data) => {
          console.log(data);
          // alert('Image has been uploaded.');
        },
        (err) => console.log(err)
      );
    }
  }
}
