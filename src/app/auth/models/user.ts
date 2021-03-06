import { Institution } from './institute';
import { Branch } from './branch';
import {UserSpeciality} from './user-specIality';
import {Corporation} from './corporation';

export class User {
  id: number;
  first_name: string;
  sur_name: string;
  dob: Date;
  gender: string;
  email: string;
  tagline: string;
  work_country_code: string;
  work_phone_no: string;
  mobile_country_code: string;
  mobile_phone_no: string;
  unique_id: number;
  nick_name: string;
  user_description: string;
  address_line_1: string;
  address_line_2: string;
  city: string;
  state: string;
  country: string;
  area_code: number;
  udid: string;
  role: string;
  status: number;
  institution_id: number;
  branch_id: number;
  is_first_time: number;
  profile_picture: string;
  currentInstitute: Institution;
  currentBranch: Branch;
  currentRole: string;
  pivot: any;
  formatted_date: string;
  speciality: any = {};
  isUserManagement = false;
  relation_type: string;
  isStudent = false;
  coach_attendance: any = {};
  is_present: string;
  index: number;
  user_speciality: UserSpeciality[];
  role_type: string;
  age: any;
  user_state: any = {};
  user_country: any = {};
  emp_state: any = {};
  emp_country: any = {};
  country_name: string;
  state_name: string;
  old_password: string;
  new_password: string;
  confirm_password: string;
  home_country: any = {};
  work_country: any = {};
  mobile_country: any = {};
  country_code: string;
  currentCorporation: Corporation;
  home_country_code: string;
  home_phone_no: number;
}
