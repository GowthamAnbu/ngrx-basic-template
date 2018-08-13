export interface Corporation {
  id: number;
  corporation_name: string;
  corporation_type: string;
  corp_reg_no: string;
  corp_vat_no: string;
  corp_trading_as: string;
  corp_address_line_1: string;
  corp_address_line_2: string;
  corp_city: string;
  corp_state: string;
  corp_country: string;
  corp_area_code: string;
  corp_postal_address_line_1: string;
  corp_postal_address_line_2: string;
  corp_postal_city: string;
  corp_postal_state: string;
  corp_postal_country: string;
  corp_postal_area_code: string;
  corp_website_address: string;
  corp_email: string;
  corp_phone: string;
  primary_contact_name: string;
  primary_contact_phone: string;
  primary_contact_email: string;
  corp_institutes: any;
  profile_picture: string;
}
