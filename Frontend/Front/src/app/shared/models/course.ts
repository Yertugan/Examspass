export interface Course {
  token: string;
  course_id: String
  c_name: String;
  //c_owner: Business_account
  c_info: String
  c_price: number
  c_rating: number
  number_of_voted: number
  c_comments: String
  registered_students: number
  //c_images: Image
  //c_files: File
  c_videos: HTMLVideoElement
  //c_sections: List[Sections]
}
