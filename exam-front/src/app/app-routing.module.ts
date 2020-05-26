import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './landing/landing.component';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {ProfileComponent} from './profile/profile.component';
import { AuthGuard } from './shared/services/auth-services/auth.guard';
import {CourseinfoComponent} from './courseinfo/courseinfo.component';
import {CourselistComponent} from './courselist/courselist.component';
import {CreatecourseComponent} from './createcourse/createcourse.component';
import {EditProfileComponent} from './edit-profile/edit-profile.component';
import {CourselessonsComponent} from './courselessons/courselessons.component';
import {LessonComponent} from './lesson/lesson.component';
import {SearchresultComponent} from './searchresult/searchresult.component';
import {StudentProfileComponent} from './studentprofile/studentprofile.component';


const routes: Routes = [


  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
  {path: 'registration', component: RegistrationComponent},
  {path: '', component: LandingComponent,
  },

  {path: 'login', component: LoginComponent},

  {path: 'course_info/:id', component: CourseinfoComponent},
  {path: 'course_list', component: CourselistComponent},
  {path: 'course_create', component: CreatecourseComponent},
  {path: 'edit_profile', component: EditProfileComponent},
  {path: 'course_lessons/:course_id', component: CourselessonsComponent},
  {path: 'course_lessons/:course_id/:lesson_id', component: LessonComponent},
  {path: 'search', component: SearchresultComponent},
  {path: 'student_profile', component: StudentProfileComponent}

  // {path: '', component: canActivate: [AuthGuard]},
// {path: '', component:},
  /*
  {path: 'profile/:id',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
*/

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
