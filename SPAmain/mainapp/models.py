from django.db import models


# Create your models here.
class Instrument(models.Model):
    in_date = models.DateField('Дата поставки', null=True, blank=True)
    name = models.CharField('Название', max_length=150, null=True, blank=True)
    count = models.SmallIntegerField('Количество', null=True, blank=True)
    length = models.IntegerField('Длина(расстояние)в ММ', null=True, blank=True)

    def __str__(self):
        return '{} в кол-ве {}'.format(self.name, str(self.count))
