1. get stations from route and date

param(s):
route_long_name (string)
date (string)

returns:
stations (array)

- example 1:

user provides:
{
  route:  Lakeshore West,
  date:   20161128
}

api returns:
[Union Station, Clarkson, Oakville, Bronte, Burlington]

- example 2:

user provides:
{
  route:  Milton,
  date:   20161202
}

api returns:
[Union Station, Kipling, Dixie, Cooksville, Erindale, Streetsville, Meadowvale, Lisgar, Milton]

- implementation:

from *routes* table, get route_id (e.g. 258-LW) from route_long_name (e.g. Lakeshore West)
from *calendar_dates* table, get service_id from date
from *trips* table, get trip_id from route_id and service_id
from *stop_times* table, get all the stop_id
from *stops* table, get al the stop name from stop_id

2. get train arrival time from route, stations, date, time

params:
route
from station
to station
date
time

returns:
